import { useCallback, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export const useCurrentUser = (key, initialValue) => {
  const initialize = (key) => {
    try {
      const item = localStorage.getItem(key);
      if (item && item !== "undefined") {
        const current_user = jwt_decode(JSON.parse(item));
        setUser(current_user.payload);
        console.log(current_user.payload);
        return current_user.payload;
      }

      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } catch {
      return initialValue;
    }
  };

  const [state, setState] = useState(null); // problem is here

  // solution is here....
  useEffect(()=>{
    setState(initialize(key));
  },[]);

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setState(valueToStore);
        localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    },
    [key, setState]
  );

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
    } catch {
      console.log(error);
    }
  }, [key]);

  return [state, setValue, remove];
};
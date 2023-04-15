import SearchComponent from "../components/SearchComponent";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { Spacer, Container, Stack } from "@chakra-ui/react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Hidden Hustlers
        </title>
      </Head>

      {/* <SearchComponent /> */}

 <Hero />
 <Spacer h={5}>

 </Spacer>
  <Features />

<br/><br/><br/>


    </div>

  )
}

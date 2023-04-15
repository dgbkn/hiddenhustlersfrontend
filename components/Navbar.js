import {
    Box,
    Button,
    IconButton,
    Flex,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaSignOutAlt } from 'react-icons/fa';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import { useLocalStorage } from '../hooks/useLocalStorage.js';

export default function Navbar() {
    var router = useRouter();
    const [authToken, setauthToken] = useLocalStorage("token", "");

    return (

        <Box className='header' paddingX={2} paddingY={5} >
            <Flex as="header" width="100%" align="center" px={10} wrap={'wrap'} paddingBottom={2}>
                <Logo />

                <Box marginLeft={'auto'} >
                    {authToken == null && <><Button colorScheme='red' variant='outline' onClick={() => router.push('/auth/login')}>
                        Get Started.
                    </Button></>}

                    {authToken != null && <><Button colorScheme='red' variant='outline' onClick={() => router.push('/dashboard')}>
                        Dashboard.
                    </Button>
                        <IconButton
                            size="md"
                            fontSize="lg"
                            aria-label={`Logout`}
                            variant="ghost"
                            color="current"
                            marginLeft="2"
                            onClick={() => {setauthToken(null);window.location.replace('/')}}
                            icon={<FaSignOutAlt />}
                        />
                    </>}


                    <ColorModeSwitcher />
                </Box>

            </Flex>
        </Box>

    )
        ;
}

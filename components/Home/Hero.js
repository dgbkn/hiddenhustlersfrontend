import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Flex
      w={'full'}
      h={'80vh'}
      backgroundImage={
        'url("./thehero.jpg")'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Welcome to the unified platform of anonymous freelancing platform.
          </Text>
          <Stack direction={'row'}>
            <Text
              color={'orange'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: 'xl', md: 'xl' })}>
              No Strings Attached.
            </Text>

          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
import { Box, Flex, Text, Button, useColorModeValue, Stack, useColorMode, Container } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function NavigationBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('blue.500', 'blue.900')}>
      <Container maxW="75rem">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>
            <Text color={useColorModeValue('white', 'white')} fontSize={24} fontWeight={600}>
              ZAMOV
            </Text>
          </Box>

          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

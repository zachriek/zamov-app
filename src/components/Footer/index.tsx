import { Box, Flex, Text, useColorModeValue, Container } from '@chakra-ui/react';

export default function NavigationBar() {
  return (
    <Box bg={useColorModeValue('blue.500', 'blue.900')}>
      <Container maxW="75rem">
        <Flex h={16} alignItems="center" justifyContent="center">
          <Box>
            <Text color={useColorModeValue('white', 'white')} fontSize={16} fontWeight={500}>
              Made with ❤️ by <strong>@zachriek</strong>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

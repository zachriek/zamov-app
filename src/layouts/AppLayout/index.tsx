import { useEffect } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

const AppLayout = (props: any) => {
  useEffect(() => {
    document.title = `${props.title ? props.title : ''} - ZAMOV`;
  }, [props.title]);

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')}>
      <NavigationBar />
      <main>{props.children}</main>
      <Footer />
    </Box>
  );
};

export default AppLayout;

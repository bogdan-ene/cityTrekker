import { ChakraProvider, CSSReset, Box, Flex } from '@chakra-ui/react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainLayout: React.FC = ({ children }) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box>
        <Header />
        <Flex>
          <Sidebar />
          <Box as="main" flex="1"> 
            {children}
          </Box>
        </Flex>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default MainLayout;

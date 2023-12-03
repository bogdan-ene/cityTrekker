import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainLayout: React.FC = ({ children }) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Header />
      <Sidebar />
      <main>
        {/* Content of the specific page */}
        {children}
      </main>
      <Footer />
    </ChakraProvider>
  );
};

export default MainLayout;

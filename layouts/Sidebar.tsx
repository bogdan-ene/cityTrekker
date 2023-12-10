import React from 'react';
import { Box, Flex, VStack, IconButton, Text, Divider, ColorModeScript } from '@chakra-ui/react';
import { SunIcon, MoonIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { useColorMode } from '@chakra-ui/react';

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <>
      <ColorModeScript initialColorMode={colorMode} />
      <Box
        as="aside"
        bg={colorMode === 'dark' ? 'gray.800' : 'gray.200'}
        color={colorMode === 'dark' ? 'white' : 'black'}
        w="250px"
        boxShadow="lg"
        zIndex="99"
        h="100vh"
      >
        <Flex align="center" justify="space-between" p={4}>
          <IconButton
            aria-label="Toggle Sidebar"
            icon={<ChevronDownIcon />}
            variant="ghost"
            fontSize="2xl"
            display="none" // Hides the ChevronDownIcon
          />
          <Text fontSize="xl" fontWeight="bold">
             #city-trekker
          </Text>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            fontSize="2xl"
          />
        </Flex>

        <Divider />

        <VStack spacing={4} align="stretch" p={4}>
          <a href="/" onClick={() => handleNavigation('/')} style={{ fontSize: '1.2em' }}>
            Home
          </a>
          <a href="/about" onClick={() => handleNavigation('/about')} style={{ fontSize: '1.2em' }}>
            About
          </a>
          <a href="/services" onClick={() => handleNavigation('/services')} style={{ fontSize: '1.2em' }}>
            Services
          </a>
          <a href="/portfolio" onClick={() => handleNavigation('/portfolio')} style={{ fontSize: '1.2em' }}>
            Portfolio
          </a>
          <a href="/blog" onClick={() => handleNavigation('/blog')} style={{ fontSize: '1.2em' }}>
            Blog
          </a>
          <a href="/contact" onClick={() => handleNavigation('/contact')} style={{ fontSize: '1.2em' }}>
            Contact
          </a>
        </VStack>
      </Box>
    </>
  );
};

export default Sidebar;

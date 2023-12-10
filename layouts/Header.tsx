import React from 'react';
import { Box, Flex, Heading, useColorMode, Link, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <Box as="header" bg="teal.500" py={4} px={6} color="white">
      <Flex align="center" justify="space-between">
        <Flex align="center">
          {menuItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              color="white"
              fontSize="sm"
              fontWeight="bold"
              padding="12px 20px"
              borderRadius="4px"
              textDecoration="none"
              marginRight="12px"
            >
              {item.label}
            </Link>
          ))}
        </Flex>
        <Flex align="center">
          <Heading as="h1" fontSize="xl" fontWeight="bold" mr={4}>
            #city-trekker
          </Heading>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;

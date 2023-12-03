import React, { useState } from 'react';
import { Box, Flex, Heading, Spacer, Button, IconButton, useColorMode, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { SunIcon, MoonIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleDropdownToggle = (): void => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Box as="header" bg="teal.500" py={4} px={6} color="white">
      <Flex align="center">
        <Box>
          <Heading as="h1" fontSize="xl" fontWeight="bold">
            Your Logo
          </Heading>
        </Box>
        <Spacer />
        <Flex align="center">
          <Button variant="ghost" mr={3}>
            Home
          </Button>
          <Button variant="ghost" mr={3}>
            About
          </Button>
          <Button variant="ghost" mr={3}>
            Services
          </Button>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost" onClick={handleDropdownToggle}>
              More
            </MenuButton>
            <MenuList display={showDropdown ? 'block' : 'none'} zIndex="9999">
              <MenuItem>Portfolio</MenuItem>
              <MenuItem>Blog</MenuItem>
              <MenuItem>Contact</MenuItem>
            </MenuList>
          </Menu>
          <Spacer />
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

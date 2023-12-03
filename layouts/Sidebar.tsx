import { useState } from 'react';
import { Box, Flex, VStack, IconButton, Button, useColorMode, Text, Divider } from '@chakra-ui/react';
import { SunIcon, MoonIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Sidebar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleDropdownToggle = (): void => {
    setShowDropdown(!showDropdown);
  };

  return (
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
          onClick={() => setShowDropdown(!showDropdown)}
          variant="ghost"
          fontSize="2xl"
        />
        <Text fontSize="xl">Your Logo</Text>
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
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">About</Button>
        <Button variant="ghost">Services</Button>
        <Button variant="ghost" onClick={handleDropdownToggle}>
          More <ChevronDownIcon />
        </Button>
        {showDropdown && (
          <VStack spacing={2} align="stretch">
            <Button variant="ghost">Portfolio</Button>
            <Button variant="ghost">Blog</Button>
            <Button variant="ghost">Contact</Button>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

export default Sidebar;

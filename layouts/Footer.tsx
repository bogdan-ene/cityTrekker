import { Box, Flex, VStack, Text, Link } from '@chakra-ui/react';

const Footer: React.FC = () => {
  const companyName = 'City Trekker';
  const headquartersLocation = 'Brasov, Romania';

  return (
    <Box as="footer" bg="teal.500" py={8} color="white">
      <VStack spacing={4}>
        <Flex direction="column" align="center">
          <Text fontSize="xl" fontWeight="bold">
            {companyName}
          </Text>
          <Text fontSize="sm">{headquartersLocation}</Text>
        </Flex>

        <Flex justify="center">
          <Link mx={2} href="#">
            Home
          </Link>
          <Link mx={2} href="#">
            About
          </Link>
          <Link mx={2} href="#">
            Services
          </Link>
          <Link mx={2} href="#">
            Contact
          </Link>
        </Flex>

        <Text textAlign="center" fontSize="sm">
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;

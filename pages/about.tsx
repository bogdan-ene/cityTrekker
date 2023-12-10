import React from 'react';
import MainLayout from '../layouts/MainLayout.tsx';
import Link from 'next/link';
import { Box, Heading, Text, Container } from '@chakra-ui/react';

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <Container maxW="container.lg" mt={8}>
        <Box textAlign="center" py={8}>
          <Heading as="h1" mb={4}>
            About City Trekker
          </Heading>
          <Text fontSize="lg" lineHeight="1.6">
            Welcome to City Trekker - your gateway to discovering the world's cities! At City Trekker, we are passionate
            about enabling exploration and providing comprehensive insights into urban areas globally. Our platform aims to
            empower individuals, travelers, and enthusiasts by offering a wealth of information, curated guides, and
            engaging content centered around city exploration. Discover vibrant cultures, uncover historical landmarks,
            navigate diverse neighborhoods, and make informed decisions when exploring cities - all with City Trekker. Join
            our community of city enthusiasts and embark on a journey to unravel the uniqueness and allure of cities
            worldwide. There's always more to explore with City Trekker!
          </Text>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default AboutPage;

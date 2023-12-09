import React from 'react';
import MainLayout from '../layouts/MainLayout.tsx';

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="about-content">
        <h1>About City Trekker</h1>
        <p>Welcome to City Trekker - your gateway to discovering the world's cities!</p>
        <p>At City Trekker, we are passionate about enabling exploration and providing comprehensive insights into urban areas globally.</p>
        <p>Our platform aims to empower individuals, travelers, and enthusiasts by offering a wealth of information, curated guides, and engaging content centered around city exploration.</p>
        <p>Discover vibrant cultures, uncover historical landmarks, navigate diverse neighborhoods, and make informed decisions when exploring cities - all with City Trekker.</p>
        <p>Join our community of city enthusiasts and embark on a journey to unravel the uniqueness and allure of cities worldwide. There's always more to explore with City Trekker!</p>
      </div>
    </MainLayout>
  );
};

export default AboutPage;

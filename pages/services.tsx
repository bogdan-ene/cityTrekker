import React from 'react';
import MainLayout from '../layouts/MainLayout.tsx';
import Link from 'next/link';

const ServicesPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="services-content">
        <h1>Our Services</h1>
        <p>Discover the services we offer:</p>
        <ul>
          <li>City Tours</li>
          <li>Local Guides</li>
          <li>Custom Travel Planning</li>
          <li>Cultural Experiences</li>
          {/* Add more services as needed */}
        </ul>
      </div>
    </MainLayout>
  );
};

export default ServicesPage;

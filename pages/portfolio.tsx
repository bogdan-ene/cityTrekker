import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout.tsx';
import Link from 'next/link';

const PortfolioPage: React.FC = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCitiesData = async () => {
      try {
        const response = await fetch('https://api.opentripmap.com/0.1/en/places/bbox?lon_min=-180&lat_min=-90&lon_max=180&lat_max=90&kinds=city&format=json&apikey=YOUR_API_KEY');
        const data = await response.json();
        setCities(data.features); 
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchCitiesData();
  }, []);

  return (
    <MainLayout>
      {/* <div className="portfolio-content">
        <h1>City Trekker Portfolio</h1>
        <p>Explore our portfolio of cities</p>
        <div className="portfolio-items">
          {cities.map(city => (
            <div key={city.properties.xid} className="portfolio-item">
              <img src={city.properties.preview.source} alt={city.properties.name} />
              <h2>{city.properties.name}</h2>
              <p>{city.properties.wikipedia_extracts.text}</p>
            </div>
          ))}
        </div>
      </div> */}
    </MainLayout>
  );
};

export default PortfolioPage;

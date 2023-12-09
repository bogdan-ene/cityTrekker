import { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout.tsx';
import CityCard from '../components/CityCard.tsx';
import Link from 'next/link';

const Home: React.FC = () => {
  const [cityImages, setCityImages] = useState<string[]>([]);

  useEffect(() => {
    fetchCityImages();
  }, []);

  const fetchCityImages = async () => {
    try {
      const response = await fetch('https://api.teleport.org/api/urban_areas/slug:paris/images/');
      const data = await response.json();
      const images = data.photos.map((photo: any) => photo.image.web);
      setCityImages(images);
    } catch (error) {
      console.error('Error fetching city images:', error);
    }
  };

  return (
    <MainLayout>
      <div>
        {cityImages.map((imageUrl, index) => (
          <CityCard key={index} imageUrl={imageUrl} />
        ))}
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/">
              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <div>Services</div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <div>Portfolio</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div>About</div>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <div>Blog</div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div>Contact</div>
            </Link>
          </li>
        </ul>
      </nav>
    </MainLayout>
  );
};

export default Home;

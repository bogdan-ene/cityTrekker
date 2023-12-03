import { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout.tsx';
import CityCard from '../components/CityCard.tsx';

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
    </MainLayout>
  );
};

export default Home;

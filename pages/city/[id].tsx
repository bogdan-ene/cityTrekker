import React from 'react';
import { Box, Image, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface CityCardWithInfoProps {
  cityInfo: {
    name: string;
    country: string;
    imageUrl: string;
  };
}

const CityCardWithInfo: React.FC<CityCardWithInfoProps> = ({ cityInfo }) => {
  const imageUrl = cityInfo.imageUrl || '';

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      key={cityInfo.name}
    >
      <Image src={imageUrl} alt="City" width="100%" height={200} />
      <Box>
        {cityInfo ? (
          <Heading as="h3">{cityInfo.name}</Heading>
        ) : (
          <p>No city information available</p>
        )}
        {cityInfo ? (
          <p>{cityInfo.country}</p>
        ) : null}
        {imageUrl ? null : (
          <p>No image available</p>
        )}
      </Box>
    </Box>
  );
};

const CityPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const fetchCityInfoAsync = async (id: number) => {
    try {
      const cityInfo = await getCityInfo(id);
      if (!cityInfo) {
        throw new Error(`City with ID ${id} not found`);
      }

      return cityInfo;
    } catch (error) {
      console.error('Error fetching city information:', error);
      return {
        name: 'Unknown City',
        country: '',
        imageUrl: '',
      };
    }
  };

  const cityInfo = await fetchCityInfoAsync(id);

  return (
    <div>
      <h1>City Page for ID: {id}</h1>
      <CityCardWithInfo cityInfo={cityInfo} />
    </div>
  );
};

export default CityPage;

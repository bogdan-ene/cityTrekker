import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import CityCardWithInfo from './CityCardWithInfo';
import { useRouter } from 'next/router';
import { fetchCityInfoAsync } from './utils';

const CityList = () => {
  const router = useRouter();
  const [cityInfo, setCityInfo] = useState([]);

  useEffect(() => {
    fetchCityInfo().then((data) => setCityInfo(data));
  }, []);

  return (
    <div>
      {cityInfo.map((cityInfo) => (
        <CityCardWithInfo
          cityInfo={cityInfo}
        />
      ))}
    </div>
  );
};

export default CityList;

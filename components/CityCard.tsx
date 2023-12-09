import React from 'react';
import { Box, Image, Heading, useState } from '@chakra-ui/react';

interface CityCardWithInfoProps {
  cityName: string;
}

class CityCardWithInfo extends React.Component<CityCardWithInfoProps> {
  state = {
    cityInfo: null,
  };

  async getCityInfo() {
    try {
      const cityInfo = cities.find(city => city.name.toLowerCase() === this.props.cityName.toLowerCase());
      if (!cityInfo) {
        return null;
      }

      this.setState({
        cityInfo,
      });
    } catch (error) {
      console.error('Error fetching city information:', error);
      this.setState({
        cityInfo: null,
      });
    }
  }

  render() {
    const cityInfo = this.state.cityInfo;
    const imageUrl = cityInfo?.imageUrl || '';

    return (
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        key={this.props.cityName}
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
  }
}

export default CityCardWithInfo;

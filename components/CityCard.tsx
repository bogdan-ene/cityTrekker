import { Box, Image } from '@chakra-ui/react';

interface CityCardProps {
  imageUrl: string;
}

const CityCard: React.FC<CityCardProps> = ({ imageUrl }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Image src={imageUrl} alt="City" width="100%" height={200} />
    </Box>
  );
};

export default CityCard;

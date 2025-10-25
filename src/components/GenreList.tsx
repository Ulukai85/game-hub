import useGenres from '@/hooks/useGenres';
import { HStack, Image, List, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '@/services/image-url';

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <List.Root>
      {genres.map((genre) => (
        <List.Item key={genre.id} paddingY='4px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize='ls'>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;

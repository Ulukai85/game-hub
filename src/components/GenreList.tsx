import useGenres from '@/hooks/useGenres';
import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  List,
  Spinner,
} from '@chakra-ui/react';
import getCroppedImageUrl from '@/services/image-url';
import type { Genre } from '@/hooks/useGenres';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={2}>
        Genres
      </Heading>
      <List.Root>
        {genres.map((genre) => (
          <List.Item key={genre.id} paddingY='4px' listStyle='none'>
            <HStack spaceX={-2} maxW='100%'>
              <Image
                boxSize='32px'
                objectFit='cover'
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                asChild
                variant='ghost'
                size='xs'
                maxW='100%'
                onClick={() => onSelectGenre(genre)}>
                <Link
                  fontWeight={selectedGenre === genre ? 'bold' : 'normal'}
                  fontSize='lg'
                  whiteSpace='normal'
                  wordBreak='break-word'>
                  {genre.name}
                </Link>
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;

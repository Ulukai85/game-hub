import useGenres from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import useGameQueryStore from '@/store';
import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  List,
  Spinner,
} from '@chakra-ui/react';

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={2}>
        Genres
      </Heading>
      <List.Root>
        {genres?.results.map((genre) => (
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
                onClick={() => setSelectedGenreId(genre.id)}>
                <Link
                  fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
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

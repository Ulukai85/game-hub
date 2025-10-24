import type { Game } from '@/hooks/useGames';
import { Card, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow='hidden'>
      <Image src={game.background_image}></Image>
      <Card.Body>
        <Card.Title fontSize='2xl'>{game.name}</Card.Title>
        <PlatformIconList
          platforms={game.parent_platforms.map(
            (p) => p.platform
          )}></PlatformIconList>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;

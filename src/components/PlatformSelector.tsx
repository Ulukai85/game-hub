import usePlatform from '@/hooks/usePlatform';
import usePlatforms, { type Platform } from '@/hooks/usePlatforms';
import useGameQueryStore from '@/store';
import { Button, Menu, Portal } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const { data: platforms, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant='subtle'>
          {selectedPlatform?.name || 'Platforms'}
          <BsChevronDown></BsChevronDown>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms?.results.map((platform: Platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.slug}
                onClick={() => setSelectedPlatformId(platform.id)}>
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;

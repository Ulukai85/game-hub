import usePlatforms, { type Platform } from '@/hooks/usePlatforms';
import { Button, Menu, Portal } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectPlatform: (selectedPlatform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data: platforms, error } = usePlatforms();
  const selectedPlatform = platforms.results.find(
    (p) => p.id === selectedPlatformId
  );

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
                onClick={() => onSelectPlatform(platform)}>
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

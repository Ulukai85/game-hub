import { Menu, Button, Portal } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant='subtle'>
          Sort by: Whatexer
          <BsChevronDown></BsChevronDown>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value='1'>1</Menu.Item>
            <Menu.Item value='2'>2</Menu.Item>
            <Menu.Item value='3'>3</Menu.Item>
            <Menu.Item value='4'>4</Menu.Item>
            <Menu.Item value='5'>5</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;

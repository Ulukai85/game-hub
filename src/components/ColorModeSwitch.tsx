import { useColorMode } from './ui/color-mode';
import { Switch } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Switch.Root
      checked={colorMode == 'dark'}
      onCheckedChange={toggleColorMode}>
      <Switch.HiddenInput />
      <Switch.Control></Switch.Control>
      <Switch.Label whiteSpace='nowrap'>Dark Mode</Switch.Label>
    </Switch.Root>
  );
};

export default ColorModeSwitch;

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo, SiSega } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import type { IconType } from 'react-icons';
import type { Platform } from '@/entities/Platform';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    sega: SiSega,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        const icon = iconMap[platform.slug];
        if (!icon) return null;
        return <Icon as={icon} key={platform.id} color='gray.500' />;
      })}
    </HStack>
  );
};

export default PlatformIconList;

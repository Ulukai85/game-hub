import { Input, InputGroup } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input
        variant='subtle'
        borderRadius={20}
        placeholder='Search games...'></Input>
    </InputGroup>
  );
};

export default SearchInput;

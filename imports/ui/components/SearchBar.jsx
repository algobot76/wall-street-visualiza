import React, { useState } from 'react';
import { Menu, Search } from 'semantic-ui-react';

function SearchBar() {
  const [query, setQuery] = useState('');
  const handleSearchChange = (e, { value }) => {
    setQuery(value);
  };

  return (
    <Menu.Item>
      <Search onSearchChange={handleSearchChange} value={query} size="large" />
    </Menu.Item>
  );
}

export default SearchBar;

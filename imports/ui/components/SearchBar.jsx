import React, { useState } from 'react';
import { Search } from 'semantic-ui-react';

function SearchBar() {
  const [query, setQuery] = useState('');
  const handleSearchChange = (e, { value }) => {
    setQuery(value);
  };

  return <Search onSearchChange={handleSearchChange} value={query} />;
}

export default SearchBar;

import { createContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { FEED_QUERY } from '../queries';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const first = 20;
  const [location, setLocation] = useState('location:angola');
  const [currentCountry, setCurrentCountry] = useState('angola');
  const [searchValue, setSearchValue] = useState('');
  const { loading, data, fetchMore } = useQuery(FEED_QUERY, {
    variables: { first, location },
  });

  const fetchData = () => {
    const { endCursor } = data.search.pageInfo;
    fetchMore({
      variables: { endCursor: endCursor },
    });
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        data,
        setLocation,
        fetchData,
        currentCountry,
        setCurrentCountry,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

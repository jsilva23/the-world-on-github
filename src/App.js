import { useQuery } from '@apollo/client';
import { useState } from 'react';

import Header from './components/Header';
import UserList from './components/UserList';
import { FEED_QUERY } from './queries';
import './styles/app.scss';

function App() {
  const first = 20;
  const [location, setLocation] = useState('location:angola');
  const { loading, data, fetchMore } = useQuery(FEED_QUERY, {
    variables: { first, location },
  });

  const fetchData = () => {
    const { endCursor } = data.search.pageInfo;
    fetchMore({
      variables: { endCursor: endCursor },
      updateQuery: (prevResults, { fetchMoreResult }) => {
        fetchMoreResult.search.edges = [
          ...prevResults.search.edges,
          ...fetchMoreResult.search.edges,
        ];
        return fetchMoreResult;
      },
    });
  };

  return (
    <>
      {loading && (
        <>
          <Header />
          <h1>Loading</h1>
        </>
      )}
      {data && (
        <>
          <Header
            setLocation={setLocation}
            totalUsers={data.search.userCount}
          />
          <UserList
            users={data.search.edges}
            fetchData={fetchData}
            hasNextPage={data.search.pageInfo.hasNextPage}
          />
        </>
      )}
    </>
  );
}

export default App;

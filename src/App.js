import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';

import Header from './components/Header';
import UserList from './components/UserList';
import './styles/app.scss';

const FEED_QUERY = gql`
  query ($first: Int, $location: String!) {
    search(query: $location, type: USER, first: $first) {
      userCount
      edges {
        node {
          ... on User {
            login
            name
            avatarUrl
            company
            followers {
              totalCount
            }

            repositories {
              totalCount
            }
          }
        }
      }
    }
  }
`;

function App() {
  const first = 20;
  const [location, setLocation] = useState('location:angola');
  const { loading, data } = useQuery(FEED_QUERY, {
    variables: { first, location },
  });

  if (loading) {
    return (
      <>
        <Header />
        <h1>Loading</h1>
      </>
    );
  } else {
    return (
      <>
        <Header setLocation={setLocation} totalUsers={data.search.userCount} />
        <UserList users={data.search.edges} />
      </>
    );
  }
}

export default App;

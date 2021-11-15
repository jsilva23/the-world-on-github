import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { FEED_QUERY } from '../queries';

export default function useDataQuery(endCursor, pageNumber) {
  const first = 20;
  const [location, setLocation] = useState('location:angola');

  const { loading, data } = useQuery(FEED_QUERY, {
    variables: { first, location, endCursor },
  });

  useEffect(() => {}, [pageNumber]);

  return { loading, data, setLocation };
}

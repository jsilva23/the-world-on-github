import React, { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AppContext } from '../contexts/AppContext';
import User from './User';

const UserList = () => {
  const { data, fetchData } = useContext(AppContext);

  return (
    <InfiniteScroll
      className='users-list'
      dataLength={data.search.edges.length}
      next={fetchData}
      hasMore={data.search.pageInfo.hasNextPage}
      loader={<h4>Loading...</h4>}
    >
      {data.search.edges.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </InfiniteScroll>
  );
};

export default UserList;

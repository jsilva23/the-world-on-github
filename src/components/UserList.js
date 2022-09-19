import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import User from './User';

const UserList = ({ data, fetchData }) => {
  return (
    <InfiniteScroll
      className='users-list'
      dataLength={data.search.edges.length || 0}
      next={fetchData}
      hasMore={data.search.pageInfo.hasNextPage}
      loader={<Loading size='30' />}
    >
      {data.search.edges.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </InfiniteScroll>
  );
};

export default UserList;

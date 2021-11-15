import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import User from './User';

const UserList = ({ users, fetchData, hasNextPage }) => {
  return (
    <InfiniteScroll
      className='users-list'
      dataLength={users.length}
      next={fetchData}
      hasMore={hasNextPage}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </InfiniteScroll>
  );
};

export default UserList;

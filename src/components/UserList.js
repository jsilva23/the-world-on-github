import React from 'react';
import User from './User';

const UserList = ({ users }) => {
  return (
    <div className='users-list'>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
};

export default UserList;

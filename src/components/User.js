const User = (props) => {
  const user = props.user.node;
  return (
    <div className='user-card'>
      <img src={user.avatarUrl} alt={user.name} />
      <span className='username'>{user.name}</span>

      <div className='user-info'>
        <div>
          <span>Username:</span>
          <span>{user.login}</span>
        </div>
        <div>
          <span>Followers:</span>
          <span>{user.followers.totalCount}</span>
        </div>
        <div>
          <span>Repositories:</span>
          <span>{user.repositories.totalCount}</span>
        </div>
        {user.company ? (
          <div>
            <span>Company:</span>
            <span>{user.company}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default User;

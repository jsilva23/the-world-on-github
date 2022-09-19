import { FaUser, FaUsers } from 'react-icons/fa';
import { RiGitRepositoryCommitsFill } from 'react-icons/ri';

const User = (props) => {
  const user = props.user.node;
  return (
    <div className='user-card'>
      <div className='user-details'>
        <img src={user.avatarUrl} alt={user.name} />

        <div className='user-info'>
          <span className='username'>{user.name}</span>
          <div className='detail'>
            <span className='icon'>
              <FaUser size={15} />
            </span>
            <div>
              <span>Username</span>
              <span>{user.login}</span>
            </div>
          </div>
          <div className='detail'>
            <span className='icon'>
              <FaUsers size={15} />
            </span>
            <div>
              <span>Followers</span>
              <span>{user.followers.totalCount}</span>
            </div>
          </div>
          <div className='detail'>
            <span className='icon'>
              <RiGitRepositoryCommitsFill size={15} />
            </span>
            <div>
              <span>Repositories</span>
              <span>{user.repositories.totalCount}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className='actions'>
        <button className='button-60'>Vew profile</button>
        <button className='button-60'>Follow</button>
      </div>
    </div>
  );
};

export default User;

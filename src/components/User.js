import { FaUser, FaUsers } from 'react-icons/fa';
import { RiGitRepositoryCommitsFill } from 'react-icons/ri';

const User = (props) => {
  const user = props.user.node;
  const githubUserUrlProfile = `https://github.com/${user.login}`;
  return (
    <div className='user-card'>
      <div className='user-details'>
        <img src={user.avatarUrl} alt={user.name} />

        <div className='user-info'>
          <span className='username'>{user.name}</span>
          <div className='detail'>
            <span className='icon'>
              <FaUser size={18} />
            </span>
            <div>
              <span>Username</span>
              <span>{user.login}</span>
            </div>
          </div>
          <div className='detail'>
            <span className='icon'>
              <FaUsers size={18} />
            </span>
            <div>
              <span>Followers</span>
              <span>{user.followers ? user.followers.totalCount : 0}</span>
            </div>
          </div>
          <div className='detail'>
            <span className='icon'>
              <RiGitRepositoryCommitsFill size={18} />
            </span>
            <div>
              <span>Repositories</span>
              <span>
                {user.repositories ? user.repositories.totalCount : 0}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='actions'>
        <a href={githubUserUrlProfile} className='button-60'>
          Vew profile
        </a>
      </div>
    </div>
  );
};

export default User;

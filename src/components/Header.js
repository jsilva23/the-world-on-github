import CountriesData from './CountriesData';
import SearchField from './SearchField';

const Header = ({ setLocation, totalUsers }) => {
  return (
    <header>
      <div className='header-content'>
        <div className='content'>
          <h1>The World on GitHub</h1>
          <p>Search developers from anywhere in the world on GitHub</p>
          <SearchField />
        </div>
        <img src='img/undraw_version_control_re_mg66.svg' alt='' />
      </div>
      <div>
        <CountriesData />
      </div>
    </header>
  );
};

export default Header;

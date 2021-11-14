import CountriesData from './CountriesData';
import SearchField from './SearchField';

const Header = ({ setLocation, totalUsers }) => {
  return (
    <div className='header'>
      <h1>The World on GitHub</h1>
      <p>Search developers from anywhere in the world on GitHub</p>

      <SearchField setLocation={setLocation} />
      <CountriesData totalUsers={totalUsers} />
    </div>
  );
};

export default Header;

import { useContext } from 'react';
import { BiSearch } from 'react-icons/bi';
import { AppContext } from '../contexts/AppContext';
const Input = () => {
  const { setLocation, currentCountry, searchValue, setSearchValue } =
    useContext(AppContext);
  const searchUsers = (e) => {
    setSearchValue(e.target.value);
    setLocation(`${e.target.value} location:${currentCountry}`);
  };

  return (
    <div className='input'>
      <BiSearch size='20' color='#2d4042' />
      <input
        type='text'
        value={searchValue}
        onChange={searchUsers}
        placeholder='Search'
      />
    </div>
  );
};

export default Input;

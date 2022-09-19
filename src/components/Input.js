import { useContext } from 'react';
import { BiSearch } from 'react-icons/bi';
import { AppContext } from '../contexts/AppContext';
const Input = () => {
  let typingTimer;
  const { setLocation, currentCountry, setSearchValue } =
    useContext(AppContext);

  const searchUsers = (e) => {
    clearTimeout(typingTimer);

    typingTimer = setTimeout(() => {
      setSearchValue(e.target.value);
      setLocation(`${e.target.value} location:${currentCountry}`);
    }, 600);
  };

  return (
    <div className='input'>
      <BiSearch size='20' color='#2d4042' />
      <input type='text' onChange={searchUsers} placeholder='Search' />
    </div>
  );
};

export default Input;

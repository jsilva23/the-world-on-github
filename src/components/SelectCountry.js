import { useState, useRef, useContext } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AppContext } from '../contexts/AppContext';
import { countryList } from '../helpers';

const SelectCountry = () => {
  const { setLocation, currentCountry, setCurrentCountry } =
    useContext(AppContext);
  const [showCountries, setShowCountries] = useState(false);
  const [countries, setCountries] = useState(countryList);
  const inputRef = useRef(null);

  const showCountriesHandler = () => {
    if (showCountries === false) {
      inputRef.current.focus();
    }
  };

  const currentCountryHandler = (e) => {
    setCurrentCountry(e.target.textContent);
    setLocation(`location:${e.target.textContent.toLowerCase()}`);
  };

  const currentCountryInputHandler = (e) => {
    setCurrentCountry(e.target.value);

    setCountries(
      countryList.filter(
        (elem) =>
          elem.toLowerCase().indexOf(e.target.value.toLowerCase()) === 0 ||
          elem.toUpperCase().indexOf(e.target.value.toUpperCase()) === 0
      )
    );
  };

  const hideCountriesHandler = () => {
    setTimeout(() => {
      setShowCountries(false);
    }, 200);
  };

  return (
    <div className='country-field'>
      <input
        type='text'
        ref={inputRef}
        value={currentCountry.toUpperCase()}
        onChange={currentCountryInputHandler}
        onBlur={hideCountriesHandler}
        onFocus={() => setShowCountries(true)}
        placeholder='Select country'
      />
      <BiChevronDown size='20' color='#cec8c6' onClick={showCountriesHandler} />
      <ul className={showCountries ? 'countries' : ''}>
        {countries.map((country) => (
          <li key={country} onClick={currentCountryHandler}>
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectCountry;

import Input from './Input';
import SelectCountry from './SelectCountry';

const SearchField = () => {
  return (
    <div className='search-box'>
      <div className='search-field'>
        <Input />
        <SelectCountry />
      </div>
    </div>
  );
};

export default SearchField;

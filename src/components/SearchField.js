import Input from './Input';
import SelectCountry from './SelectCountry';

const SearchField = ({ setLocation }) => {
  return (
    <div className='search-box'>
      <div className='search-field'>
        <Input />
        <SelectCountry setLocation={setLocation} />
      </div>
    </div>
  );
};

export default SearchField;

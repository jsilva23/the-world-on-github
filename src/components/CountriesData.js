import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const CountriesData = ({ totalUsers }) => {
  const date = new Date();
  const { data } = useContext(AppContext);

  return (
    <div className='countries-datas'>
      <div>
        <span className='numbers'>{data ? data.search.userCount : 0}</span>
        <span className='desc'>Users</span>
      </div>
      <div>
        <span className='numbers'>{date.getDate()}</span>
        <span className='desc'>Day</span>
      </div>
      <div>
        <span className='numbers'>{date.getMonth() + 1}</span>
        <span className='desc'>Month</span>
      </div>
      <div>
        <span className='numbers'>{date.getFullYear()}</span>
        <span className='desc'>Year</span>
      </div>
    </div>
  );
};

export default CountriesData;

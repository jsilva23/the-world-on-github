import { BiLoaderAlt } from 'react-icons/bi';

const Loading = ({ size }) => {
  return (
    <div className='loader'>
      <div className='loading'>
        <BiLoaderAlt size={size} color='#63727d' />
      </div>
    </div>
  );
};

export default Loading;

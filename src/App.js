import { useContext } from 'react';
import Header from './components/Header';
import Loading from './components/Loading';
import UserList from './components/UserList';
import { AppContext } from './contexts/AppContext';
import './styles/app.scss';

function App() {
  const { loading, data, fetchData } = useContext(AppContext);
  return (
    <>
      <Header />
      {loading ? (
        <Loading size='50' />
      ) : (
        <UserList data={data} fetchData={fetchData} />
      )}
    </>
  );
}

export default App;

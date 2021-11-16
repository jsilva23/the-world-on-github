import { useContext } from 'react';
import Header from './components/Header';
import Loading from './components/Loading';
import UserList from './components/UserList';
import { AppContext } from './contexts/AppContext';
import './styles/app.scss';

function App() {
  const { loading, data } = useContext(AppContext);
  return (
    <>
      {loading && (
        <>
          <Header />
          <Loading size='50' />
        </>
      )}
      {data && (
        <>
          <Header />
          <UserList />
        </>
      )}
    </>
  );
}

export default App;

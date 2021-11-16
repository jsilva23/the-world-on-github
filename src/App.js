import { useContext } from 'react';
import Header from './components/Header';
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
          <h1>Loading</h1>
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

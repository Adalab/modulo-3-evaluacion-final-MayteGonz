import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import Filters from './Filters';
import ListScenes from './ListScenes';

const App = () => {
  // Estados

  const [ApiScenes, setApiScenes] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [selectYear, setSelectYear] = useState('');

  useEffect(() => {
    callToApi().then((response) => {
      setApiScenes(response);
    });
  }, []);

  return (
    <div>
      <header>
        <h1>Owen Wilson's "WOW"</h1>
      </header>
      <main>
        <Filters setSearchMovie={setSearchMovie} searchMovie={searchMovie} />
        <ListScenes apiScenes={ApiScenes} />
      </main>
    </div>
  );
};

export default App;

import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ls from '../services/localStorage';
import callToApi from '../services/api';
import Filters from './Filters';
import ListScenes from './ListScenes';
import SceneDetail from './SceneDetail';
const App = () => {
  // Estados

  const [apiScenes, setapiScenes] = useState(ls.get('scenes', []));
  const [searchMovie, setSearchMovie] = useState(ls.get('search', ''));
  const [selectYear, setSelectYear] = useState('');

  useEffect(() => {
    if (apiScenes.length === 0) {
      callToApi().then((response) => {
        setapiScenes(response);
      });
    }
  }, [apiScenes.length]);

  useEffect(() => {
    ls.set('scenes', apiScenes);
  }, [apiScenes]);

  //al guardar, porque no me guarda la última letra que le escribo?
  const handleChange = (value) => {
    setSearchMovie(value);
    ls.set('search', searchMovie);
  };

  const handleSelect = (value) => {
    setSelectYear(value);
  };

  const filteredScenes = apiScenes
    .filter((scene) => scene.movie.toLowerCase().includes(searchMovie))
    .filter((itemScene) => {
      if (selectYear === '') {
        return true;
      } else {
        return selectYear === itemScene.year.toString();
      }
    });
  const handleClick = () => {
    console.log('Estoy clickeando el botón');
    ls.remove('scenes');
    ls.remove('search');
    setapiScenes([]);
    setSearchMovie('');
  };

  const getYears = () => {
    const years = apiScenes.map((scene) => scene.year);
    const uniqueYears = new Set(years);
    const yearsArray = [...uniqueYears];
    return yearsArray.sort();
  };

  //Encontrar el id y buscar la scena basada en ese id

  return (
    <div>
      <header>
        <h1>Owen Wilson's "WOW"</h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleChange={handleChange}
                  searchMovie={searchMovie}
                  selectYear={selectYear}
                  handleSelect={handleSelect}
                  years={getYears()}
                />
                <button onClick={handleClick}>Cambia la lista!</button>
                <ListScenes filteredScenes={filteredScenes} />
              </>
            }
          />
          <Route
            path="/scene/:id"
            element={
              <>
                <SceneDetail apiScenes={apiScenes} />
                <Link to="/">Volver</Link>
              </>
            }
          />
          <Route path="*" element={<p>No existe esta página</p>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

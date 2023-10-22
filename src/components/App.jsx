import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import callToApi from '../services/api';
import ls from '../services/localStorage';
import Filters from './Filters';
import ListScenes from './ListScenes';
import SceneDetail from './SceneDetail';
const App = () => {
  // Estados

  const [ApiScenes, setApiScenes] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [selectYear, setSelectYear] = useState('');

  useEffect(() => {
    if (ApiScenes.length === 0) {
      callToApi().then((response) => {
        setApiScenes(response);
      });
    }
  }, [ApiScenes.length]);

  const handleChange = (value) => {
    setSearchMovie(value);
  };

  const handleSelect = (value) => {
    setSelectYear(value);
  };

  const filteredScenes = ApiScenes.filter((scene) =>
    scene.movie.toLowerCase().includes(searchMovie)
  ).filter((itemScene) => {
    if (selectYear === '') {
      return true;
    } else {
      return selectYear === itemScene.year.toString();
    }
  });

  const getYears = () => {
    const years = ApiScenes.map((scene) => scene.year);
    const uniqueYears = new Set(years);
    const yearsArray = [...uniqueYears];
    return yearsArray.sort();
  };

  //Encontrar el id y buscar la scena basada en ese id
  const { pathname } = useLocation();
  const routeData = matchPath('/scene/:id', pathname);
  const sceneId = routeData !== null ? routeData.params.id : '';
  const sceneData = ApiScenes.find((scene) => scene.id === sceneId);

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
                <ListScenes filteredScenes={filteredScenes} />
              </>
            }
          />
          <Route
            path="/scene/:id"
            element={
              <>
                <SceneDetail scene={sceneData} />
                <Link to="/">Volver</Link>
              </>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;

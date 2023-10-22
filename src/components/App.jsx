import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ls from '../services/localStorage';
import callToApi from '../services/api';
import Filters from './filters/Filters';
import ListScenes from './scenes/ListScenes';
import SceneDetail from './scenes/SceneDetail';
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
    .filter((scene) =>
      scene.movie.toLowerCase().includes(searchMovie.toLowerCase())
    )
    .filter((itemScene) => {
      if (selectYear === '') {
        return true;
      } else {
        return selectYear === itemScene.year.toString();
      }
    });
  const handleClick = () => {
    ls.remove('scenes');
    ls.remove('search');
    //si solo digo que setApiScenes está vacío tarda un poco en cargar y muestra el mensaje de vacío.
    callToApi().then((response) => {
      setapiScenes(response);
    });
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
    <>
      <header className="header">
        <h1>Owen Wilson's "WOW"</h1>
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="section1">
                  <Filters
                    handleChange={handleChange}
                    searchMovie={searchMovie}
                    selectYear={selectYear}
                    handleSelect={handleSelect}
                    years={getYears()}
                  />
                  <button className="section1_btn" onClick={handleClick}>
                    Change the list!
                  </button>
                </section>
                <section className="section2">
                  <ListScenes
                    filteredScenes={filteredScenes}
                    searchMovie={searchMovie}
                  />
                </section>
              </>
            }
          />
          <Route
            path="/scene/:id"
            element={
              <>
                <SceneDetail apiScenes={apiScenes} />
                <Link to="/">Back</Link>
              </>
            }
          />
          <Route path="*" element={<p>No existe esta página</p>} />
        </Routes>
      </main>
    </>
  );
};

export default App;

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

  const handleChange = (value) => {
    setSearchMovie(value);
    ls.set('search', value);
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

  const getYears = () => {
    const years = apiScenes.map((scene) => scene.year);
    const uniqueYears = new Set(years);
    const yearsArray = [...uniqueYears];
    return yearsArray.sort();
  };

  const handleClick = () => {
    ls.remove('scenes');
    ls.remove('search');
    setSearchMovie('');
    setSelectYear('');
    callToApi().then((response) => {
      setapiScenes(response);
    });
  };
  //Encontrar el id y buscar la scena basada en ese id

  return (
    <>
      <header className="header">
        <h1>Owen Wilson&apos;s &quot;WOW&quot;</h1>
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
                <Link className="btnBack" to="/">
                  Back
                </Link>
                <SceneDetail apiScenes={apiScenes} />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Link className="btnBack" to={'/'}>
                  Back to main page
                </Link>
                <p className="errorSearch">This page doesn&apos;t exist</p>
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;

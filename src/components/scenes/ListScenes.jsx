import '../../styles/components/ListScenes.scss';
import SceneItem from './SceneItem';
import { Link } from 'react-router-dom';
const ListScenes = ({ filteredScenes, searchMovie }) => {
  if (filteredScenes.length === 0) {
    return (
      <p className="errorSearch">
        No hay ninguna coincidencia para {searchMovie}. ¡Prueba con otro título!
      </p>
    );
  }
  const orderedScenes = [...filteredScenes].sort((a, b) =>
    a.movie.localeCompare(b.movie)
  );
  const renderScenes = orderedScenes.map((scene) => {
    return (
      <Link key={scene.id} to={'/scene/' + scene.id} className="card-a">
        <li className="card" key={scene.id}>
          <SceneItem scene={scene} />
        </li>
      </Link>
    );
  });

  return <ul className="container_li">{renderScenes}</ul>;
};

export default ListScenes;

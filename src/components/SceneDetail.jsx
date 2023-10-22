import { useLocation, matchPath } from 'react-router';
import { Link } from 'react-router-dom';
const SceneDetail = ({ apiScenes }) => {
  const { pathname } = useLocation();
  const routeData = matchPath('/scene/:id', pathname);
  const sceneId = routeData !== null ? routeData.params.id : '';
  const scene = apiScenes.find((scene) => scene.id === sceneId);

  if (scene === undefined) {
    return <p>No se ha encontrado la escena</p>;
  }

  return (
    <>
      <article>
        <img src={scene.poster} alt={`${scene.poster} poster`} />
        <h1>{scene.movie}</h1>
        <p>{scene.fullLine}</p>
        <p>{scene.year}</p>
        <Link target="_blank" to={scene.audio}>
          Escucha la frase aquí
        </Link>
      </article>
    </>
  );
};

export default SceneDetail;

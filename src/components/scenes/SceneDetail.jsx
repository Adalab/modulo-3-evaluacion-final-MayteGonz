import PropTypes from 'prop-types';
import { useLocation, matchPath } from 'react-router';
import { Link } from 'react-router-dom';
import '../../styles/components/SceneDetail.scss';
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
      <article className="article">
        <img src={scene.poster} alt={`${scene.poster} poster`} />
        <h1>{scene.movie}</h1>
        <p>{scene.fullLine}</p>
        <p>Director: {scene.director}</p>
        <p>{scene.year}</p>
        <Link target="_blank" to={scene.audio}>
          Listen the WOW here
        </Link>
      </article>
    </>
  );
};
SceneDetail.propTypes = {
  apiScenes: PropTypes.array,
};

export default SceneDetail;

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
    return <p className="errorSearch">Scene not found</p>;
  }

  return (
    <>
      <article className="article">
        <img
          className="article_img"
          src={scene.poster}
          alt={`${scene.poster} poster`}
        />
        <div className="article_detail">
          <h1 className="article_detail-title">{scene.movie}</h1>
          <p className="article_detail-line">
            {' '}
            Line: &quot;{scene.fullLine}&quot;
          </p>
          <p>Director: {scene.director}</p>
          <p>Year: {scene.year}</p>
          <Link
            className="article_detail-audio"
            target="_blank"
            to={scene.audio}
          >
            <i className="fa-solid fa-headphones"></i>
            Listen the WOW here
          </Link>
        </div>
      </article>
    </>
  );
};
SceneDetail.propTypes = {
  apiScenes: PropTypes.array,
};

export default SceneDetail;

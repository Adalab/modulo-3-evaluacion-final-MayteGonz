import PropTypes from 'prop-types';
const SceneItem = ({ scene }) => {
  return (
    <>
      <img src={scene.poster} />
      <p>{scene.movie}</p>
      <p>{scene.year}</p>
      <p>{scene.fullLine}</p>
    </>
  );
};
SceneItem.propTypes = {
  scene: PropTypes.object,
};

export default SceneItem;

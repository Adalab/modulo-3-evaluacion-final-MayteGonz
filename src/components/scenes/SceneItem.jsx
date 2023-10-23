import PropTypes from 'prop-types';
const SceneItem = ({ scene }) => {
  return (
    <>
      <img className="container_card-img" src={scene.poster} />
      <div className="container_card-desc">
        <p>{scene.movie}</p>
        <p>{scene.year}</p>
        <p className="container_card-desc_line">{scene.fullLine}</p>
      </div>
    </>
  );
};
SceneItem.propTypes = {
  scene: PropTypes.object,
};

export default SceneItem;

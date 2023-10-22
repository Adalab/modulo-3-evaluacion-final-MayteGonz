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

export default SceneItem;

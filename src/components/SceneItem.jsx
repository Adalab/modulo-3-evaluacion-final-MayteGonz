const SceneItem = ({ scene }) => {
  return (
    <>
      <a className="card-a" href="#">
        <img src={scene.poster} />
        <p>{scene.movie}</p>
        <p>{scene.year}</p>
        <p>{scene.fullLine}</p>
      </a>
    </>
  );
};

export default SceneItem;

import SceneItem from './SceneItem';
const ListScenes = ({ apiScenes }) => {
  const renderScenes = apiScenes.map((scene) => {
    return (
      <li className="card" key={scene.id}>
        <SceneItem scene={scene} />
      </li>
    );
  });

  return (
    <section>
      <ul>{renderScenes}</ul>
    </section>
  );
};

export default ListScenes;

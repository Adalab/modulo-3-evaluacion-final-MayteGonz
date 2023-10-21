import SceneItem from './SceneItem';
const ListScenes = ({ filteredScenes }) => {
  if (filteredScenes.length === 0) {
    return <p>No hay ninguna coincidencia. ¡Prueba con otro título!</p>;
  }
  const orderedScenes = [...filteredScenes].sort((a, b) =>
    a.movie.localeCompare(b.movie)
  );
  const renderScenes = orderedScenes.map((scene) => {
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

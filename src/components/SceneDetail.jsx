import { Link } from 'react-router-dom';
const SceneDetail = ({ scene }) => {
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

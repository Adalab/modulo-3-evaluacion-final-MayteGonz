import uuid from 'react-uuid';
const callToApi = () => {
  // Llamamos a la API
  return fetch(
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((response) => {
      // Cuando responde la API podemos limpiar los datos aqui
      const scenes = response.map((scenes) => ({
        poster: scenes.poster,
        movie: scenes.movie,
        fullLine: scenes.full_line,
        year: scenes.year,
        audio: scenes.audio,
        id: uuid(),
      }));

      return scenes;
    });
};

export default callToApi;

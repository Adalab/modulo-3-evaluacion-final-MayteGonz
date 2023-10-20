import '../styles/App.scss';
// Fichero src/components/App.jsx
import { useEffect, useState } from 'react';
import callToApi from '../services/api'; // Importamos el servicio que acabamos de crear
import ls from '../services/localStorage';
console.log(ls);

const App = () => {
  // Estados

  const [apiData, setApiData] = useState([]);

  // Llamar a la api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      setApiData(response);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);

  return <div></div>;
};

export default App;

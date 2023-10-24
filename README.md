
# Evaluación Final - Desarrollo de una Página Web con React

El objetivo de este ejercicio es crear una páágina web que muestra un listado de las escenas de las películas donde el actor Owen Wilson ha dicho 'wow'.

## Hitos del ejercicio. 

### 1. Listado de Escenas
- Mostrar 50 escenas aleatorias con:
  - Póster de la película.
  - Nombre de la película.
  - Frase completa.
  - Año de la película.
- Utilizando la [API Wow de Owen Wilson](https://owen-wilson-wow-api.onrender.com/) para obtener los datos.

### 2. Filtrado por Película
- Agregar un campo de entrada que filtra las escenas en función del nombre de la película.
- Las escenas se actualizan a medida que se escriben las letras en el campo.

### 3. Filtrado por Año
- Añadir un select para filtrar las escenas por año de la película seleccionada.
- Las escenas se actualizan cuando se elige un año.

### 4. Componentes de la Aplicación
- Crear componentes para:
  - Filtros.
  - Listado de escenas (MovieSceneList).
  - Tarjeta de escena individual (MovieSceneItem).
  - Detalle de escena (MovieSceneDetail).

### 5. Detalle de Cada Escena
- Implementar una función para mostrar la información completa de una escena al hacer clic en la tarjeta.
- Usar React Router DOM para crear una página de detalles con:
  - Nombre de la película.
  - Frase completa.
  - Director.
  - Enlace al audio de la escena.

### 6. Detalles de Calidad
- Usar etiquetas adecuadas para la semántica, como `<form>` para el campo de filtrado.
- Impedir la navegación accidental al presionar Enter en el campo de filtrado.
- Mostrar un mensaje si no se encuentra ninguna película que coincida con la búsqueda.
- Realizar búsquedas insensibles a mayúsculas/minúsculas.
- Recordar el texto de búsqueda después de regresar desde la página de detalles.

### 7. Bonus: Mejoras Visuales
- Personalizar el estilo de la web y agregar iconos.
- Utilizar un sistema de grid para presentar el listado de escenas.
- Asegurarse de que la web sea responsive en dispositivos pequeños.

### 8. Bonus: URL Compatible
- Asegurarse de que la URL de la página de detalles sea accesible directamente.
- Usar el almacenamiento local para recordar los detalles de la película después de una recarga.
- Mostrar un mensaje si se accede a una URL inexistente.

### 9. Bonus: Ordenación
- Opcionalmente, ordenar el listado de escenas alfabéticamente por el nombre de la película.

## Fecha de Límite de entrega
La fecha límite de entrega para este proyecto es el 24/10/2023 a las 14:00 horas. ¡Vamos a crear una aplicación web WOW con React!

**Enlace a GitHub Pages:** El enlace al sitio web en GitHub Pages  esta ubicado en la página principal del repositorio, en la parte superior derecha junto a la descripción, en la sección "About".


### Ejercicio Realizado Por

[**@MayteGonz**](https://github.com/MayteGonz)
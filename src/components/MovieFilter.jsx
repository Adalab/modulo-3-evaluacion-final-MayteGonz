const MovieFilter = ({ searchMovie, handleChange }) => {
  const handleInputSearch = (ev) => {
    handleChange(ev.target.value);
  };
  return (
    <>
      <label htmlFor="search">Movie </label>
      <input
        type="search"
        name="search"
        placeholder="Write a movie"
        value={searchMovie}
        onChange={handleInputSearch}
      />
    </>
  );
};

export default MovieFilter;

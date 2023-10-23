import PropTypes from 'prop-types';
const MovieFilter = ({ searchMovie, handleChange }) => {
  const handleInputSearch = (ev) => {
    handleChange(ev.target.value);
  };
  return (
    <>
      <label className="form_label" htmlFor="search">
        Search by Movie{' '}
      </label>
      <input
        className="form_input"
        type="search"
        name="search"
        placeholder="Write a movie"
        value={searchMovie}
        onChange={handleInputSearch}
      />
    </>
  );
};
MovieFilter.propTypes = {
  searchMovie: PropTypes.string,
  handleChange: PropTypes.func,
};

export default MovieFilter;

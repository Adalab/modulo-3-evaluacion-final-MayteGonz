import PropTypes from 'prop-types';
import MovieFilter from './MovieFilter';
import YearFilter from './YearFilter';
import '../../styles/components/Filters.scss';
const Filters = ({
  searchMovie,
  handleChange,
  selectYear,
  handleSelect,
  years,
}) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleForm}>
      <MovieFilter searchMovie={searchMovie} handleChange={handleChange} />
      <YearFilter
        selectYear={selectYear}
        handleSelect={handleSelect}
        years={years}
      />
    </form>
  );
};

Filters.propTypes = {
  searchMovie: PropTypes.string,
  handleChange: PropTypes.func,
  selectYear: PropTypes.string,
  handleSelect: PropTypes.func,
  years: PropTypes.array,
};
export default Filters;

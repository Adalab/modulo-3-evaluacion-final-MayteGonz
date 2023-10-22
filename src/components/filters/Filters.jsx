import MovieFilter from './MovieFilter';
import YearFilter from './YearFilter';
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
    <section>
      <form onSubmit={handleForm}>
        <MovieFilter searchMovie={searchMovie} handleChange={handleChange} />
        <YearFilter
          selectYear={selectYear}
          handleSelect={handleSelect}
          years={years}
        />
      </form>
    </section>
  );
};

export default Filters;

const Filters = ({ searchMovie, setSearchMovie }) => {
  /*  const handleInputSearch = (ev) => {
    setSearchMovie(ev.target.value);
  }; */
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleForm}>
        {/*    <label htmlFor="search">Movie </label>
        <input
          type="search"
          name="search"
          placeholder="Write a movie"
          value={searchMovie}
          onChange={handleInputSearch}
        />
        <label htmlFor="year"> Year </label>
        <select name="year" id=""></select> */}
      </form>
    </section>
  );
};

export default Filters;

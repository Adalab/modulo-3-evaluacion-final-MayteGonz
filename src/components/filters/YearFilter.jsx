import PropTypes from 'prop-types';
const YearFilter = ({ selectYear, handleSelect, years }) => {
  const handleChange = (ev) => {
    handleSelect(ev.target.value);
  };
  const renderYearsOptions = () => {
    return years.map((year, index) => (
      <option key={index} value={year}>
        {year}
      </option>
    ));
  };
  return (
    <>
      <label className="form_label" htmlFor="year">
        Search by Year
      </label>
      <select
        className="form_input"
        value={selectYear}
        name="year"
        id="year"
        onChange={handleChange}
      >
        <option value="">All</option>
        {renderYearsOptions()}
      </select>
    </>
  );
};
YearFilter.propTypes = {
  selectYear: PropTypes.string,
  handleSelect: PropTypes.func,
  years: PropTypes.array,
};
export default YearFilter;

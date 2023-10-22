const YearFilter = ({ selectYEar, handleSelect, years }) => {
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
        value={selectYEar}
        name="year"
        id="year"
        onChange={handleChange}
      >
        <option defaultChecked value="">
          All
        </option>
        {renderYearsOptions()}
      </select>
    </>
  );
};

export default YearFilter;

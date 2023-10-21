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
      <label htmlFor="year"> Year </label>
      <select value={selectYEar} name="year" id="year" onChange={handleChange}>
        <option defaultChecked value="">
          All
        </option>
        {renderYearsOptions()}
      </select>
    </>
  );
};

export default YearFilter;

import React from 'react';

const SearchInput = ({
  handleFormSearch,
  handleQueryChange,
  cleanSearch,
  query,
  handleSelectChange,
  typeValue,
  typeValues,
  formatValue,
  formatValues,
}) => {
  return (
    <div>
      <form onSubmit={handleFormSearch}>
        <input onChange={handleQueryChange} type='text' value={query} />
        <button type='submit'>Search</button>
        <button type='button' onClick={cleanSearch}>
          Clean
        </button>
      </form>

      <div>
        <select
          value={typeValue}
          onChange={(e) => {
            handleSelectChange(e, setTypeValue);
          }}
        >
          {typeValues.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          value={formatValue}
          onChange={(e) => {
            handleSelectChange(e, setFormatValue);
          }}
        >
          {formatValues.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchInput;

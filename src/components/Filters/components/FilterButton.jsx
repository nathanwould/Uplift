import React from 'react'

function FilterButton({text, filterColumn, filterValue, setTrainFilter}) {
  const handleClick = () => {
    setTrainFilter({
      column: filterColumn,
      value: filterValue,
    })
  };
  return (
    <button onClick={handleClick}>{text}</button>
  );
}

export default FilterButton;
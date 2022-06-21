import { useState } from 'react';
import theme from '../../../theme';


function FilterButton({ text, filterColumn, filterValue, trainFilter, setTrainFilter }) {
  const [hover, setHover] = useState(false);
  const active = Boolean((filterValue === trainFilter.value) && filterValue !== null);

  const handleClick = () => {
    setTrainFilter({
      column: filterColumn,
      value: filterValue,
    })
  };

  const style = {
    normal: {
      marginRight: '.5rem',
      background: `${theme.colors.white}`,
      border: '1px solid black',
      borderRadius: '.3rem',
      transition: 'all .2s',
    },
    hover: {
      background: `${theme.colors.gray[50]}`,
      cursor: 'pointer',
    },
    active: {
      background: `${theme.colors.gray[600]}`,
      color: 'white'
    },
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...style.normal,
        ...(hover ? style.hover : null),
        ...(active ? style.active : null),
      }}
    >
      {text}
    </button>
  );
}

export default FilterButton;
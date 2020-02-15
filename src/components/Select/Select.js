import React from 'react';
import { func, string, arrayOf, bool } from 'prop-types';

import style from './Select.module.scss';

const Select = ({ onChange, placeholder, disabled, options = [], className }) => {
  const handleChange = e => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <select
      disabled={disabled}
      className={`${style.wrapper} ${className} ${disabled && style.disabled}`}
      onChange={handleChange}
    >
      <>
        <option disabled selected hidden>
          {placeholder}
        </option>
        {options.map(option => (
          <option
            key={option.value ? option.value : option}
            value={option.value ? option.value : option}
          >
            {option.label ? option.label : option}
          </option>
        ))}
      </>
    </select>
  );
};

Select.propTypes = {
  onChange: func,
  options: arrayOf(string),
  placeholder: string,
  disabled: bool,
  className: string,
};

export default Select;

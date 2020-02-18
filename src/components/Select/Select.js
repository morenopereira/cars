import React from 'react';
import { func, string, arrayOf, bool, object, oneOfType } from 'prop-types';

import style from './Select.module.scss';

const Select = ({ onChange, placeholder, disabled, options = [], className, name }) => {
  const handleChange = e => {
    if (onChange) onChange(e.target.name, e.target.value);
  };

  return (
    <select
      disabled={disabled}
      className={`${style.wrapper} ${className} ${disabled && style.disabled}`}
      onChange={handleChange}
      name={name}
      defaultValue="default"
      data-testid="select"
    >
      <>
        <option value="default" disabled hidden>
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
  options: arrayOf(oneOfType([string, object])),
  placeholder: string,
  disabled: bool,
  className: string,
  name: string,
};

export default Select;

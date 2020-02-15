import React from 'react';
import { oneOfType, string, node } from 'prop-types';

import style from './Title.module.scss';

const Title = ({ children }) => <h1 className={style.title}>{children}</h1>;

Title.propTypes = {
  children: oneOfType([string, node]),
};

export default Title;

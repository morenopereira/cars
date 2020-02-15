import React from 'react';
import { node } from 'prop-types';

import style from './Container.module.scss';

const Container = ({ children }) => <main className={style.wrapper}>{children}</main>;

Container.propTypes = {
  children: node.isRequired,
};

export default Container;

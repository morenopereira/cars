import React from 'react';
import { node, bool, string } from 'prop-types';

import style from './Container.module.scss';

const Container = ({ children, flex, direction, align, justify }) => (
  <main
    className={`
    ${style.wrapper}
    ${flex && style.flex}
    ${direction && style[direction]}
    ${align && style[align]}
    ${justify && style[justify]}`}
  >
    {children}
  </main>
);

Container.propTypes = {
  children: node.isRequired,
  flex: bool,
  direction: string,
  align: string,
  justify: string,
};

export default Container;

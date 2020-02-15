import React from 'react';
import { bool, node, func } from 'prop-types';

import arrow from '../../assets/arrow.svg';

import style from './Collapse.module.scss';

const Collapse = ({ children, collapsed, onClick }) => {
  return (
    <>
      <div className={`${style.wrapper} ${collapsed ? style.active : style.collapse}`}>
        {children}
      </div>
      <button type="button" onClick={onClick} className={style.btn}>
        <img className={collapsed ? style.down : undefined} alt="Arrow" src={arrow} />
      </button>
    </>
  );
};

Collapse.propTypes = {
  children: node,
  collapsed: bool,
  onClick: func,
};

export default Collapse;

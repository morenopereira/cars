import React from 'react';
import { number, string, bool } from 'prop-types';

import styles from './Loader.module.scss';

const Loader = ({ size = 51, weight = 6, color = '#17b3db', minHeight }) => {
  return (
    <div className={`${styles.ldsRing} ${minHeight && styles.minHeight}`}>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `${weight}px solid #fff`,
          borderColor: `${color} transparent transparent transparent`,
        }}
      />
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `${weight}px solid #fff`,
          borderColor: `${color} transparent transparent transparent`,
        }}
      />
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `${weight}px solid #fff`,
          borderColor: `${color} transparent transparent transparent`,
        }}
      />
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `${weight}px solid #fff`,
          borderColor: `${color} transparent transparent transparent`,
        }}
      />
    </div>
  );
};

Loader.propTypes = {
  size: number,
  weight: number,
  color: string,
  minHeight: bool,
};

export default Loader;

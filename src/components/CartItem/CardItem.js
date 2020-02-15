import React from 'react';
import { string, bool } from 'prop-types';

import style from './CardItem.module.scss';

const CardItem = ({ label, field, price }) => (
  <li className={style.item}>
    <span>{label}</span>
    <strong>{price ? `R$ ${field}` : field}</strong>
  </li>
);

CardItem.propTypes = {
  label: string,
  field: string,
  price: bool,
};

export default CardItem;

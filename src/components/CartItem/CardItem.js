import React from 'react';
import { string, bool } from 'prop-types';

import currenyFormat from '../../utils/currencyFormat';

import style from './CardItem.module.scss';

const renderField = (field, price) => {
  if (field === undefined || field === null || field.length === 0) return '-';
  if (price) return currenyFormat(field);

  return field;
};

const CardItem = ({ label, field, price }) => (
  <li className={style.item}>
    <span>{label}</span>
    <strong>{renderField(field, price)}</strong>
  </li>
);

CardItem.propTypes = {
  label: string,
  field: string,
  price: bool,
};

export default CardItem;

import React from 'react';

import CardItem from '../CartItem';

import style from './CardDetails.module.scss';

const CardDetails = ({ car }) => (
  <ul className={style.wrapper}>
    <CardItem label="Marca" field={car?.brand} />
    <CardItem label="Modelo" field={car?.model} />
    <CardItem label="Versão" field={car?.version} />
    <CardItem label="Ano" field={car?.modelYear} />
    <CardItem label="Km médio" field={car?.kmMedio} />
    <CardItem price label="Preço tabela FIPE" field={car?.precoFipe} />
    <CardItem price label="Preço médio:" field={car?.precoMedio} />
    <CardItem price label="Preço máximo:" field={car?.precoMaximo} />
  </ul>
);

export default CardDetails;

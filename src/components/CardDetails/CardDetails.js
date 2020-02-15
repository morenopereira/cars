import React from 'react';
import { objectOf, string, oneOfType, number } from 'prop-types';

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
    <CardItem price label="Preço mínimo:" field={car?.precoMinimo} />
    <CardItem price label="Preço médio:" field={car?.precoMedio} />
    <CardItem price label="Preço máximo:" field={car?.precoMaximo} />
    <CardItem price label="Piso preço médio:" field={car?.pisoPrecoMedio} />
    <CardItem price label="Piso preço médio volanty:" field={car?.pisoPrecoMedioVolanty} />
    <CardItem price label="Teto preço médio volanty:" field={car?.tetoPrecoMedioVolanty} />
    <CardItem price label="Teto preço concessionária:" field={car?.tetoPrecoConcessionaria} />
    <CardItem price label="Piso preço concessionária:" field={car?.pisoPrecoConcessionaria} />
  </ul>
);

CardDetails.propTypes = {
  car: objectOf(oneOfType([string, number])),
};

export default CardDetails;

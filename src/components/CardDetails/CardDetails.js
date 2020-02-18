import React from 'react';
import { objectOf, string, oneOfType, number } from 'prop-types';

import CardItem from '../CartItem';

import style from './CardDetails.module.scss';

const CardDetails = ({ details }) => (
  <ul className={style.wrapper}>
    <CardItem label="Marca" field={details?.brand} />
    <CardItem label="Modelo" field={details?.model} />
    <CardItem label="Versão" field={details?.version} />
    <CardItem label="Ano" field={details?.modelYear} />
    <CardItem label="Km médio" field={details?.kmMedio} />
    <CardItem price label="Preço tabela FIPE" field={details?.precoFipe} />
    <CardItem price label="Preço mínimo:" field={details?.precoMinimo} />
    <CardItem price label="Preço médio:" field={details?.precoMedio} />
    <CardItem price label="Preço máximo:" field={details?.precoMaximo} />
    <CardItem price label="Piso preço médio:" field={details?.pisoPrecoMedio} />
    <CardItem price label="Piso preço médio volanty:" field={details?.pisoPrecoMedioVolanty} />
    <CardItem price label="Teto preço médio volanty:" field={details?.tetoPrecoMedioVolanty} />
    <CardItem price label="Teto preço concessionária:" field={details?.tetoPrecoConcessionaria} />
    <CardItem price label="Piso preço concessionária:" field={details?.pisoPrecoConcessionaria} />
  </ul>
);

CardDetails.propTypes = {
  details: objectOf(oneOfType([string, number])),
};

export default CardDetails;

import React from 'react';
import CardItem from '../components/CartItem';

import '../index.module.scss';

export default {
  title: 'CardItem',
  component: CardItem,
};

export const Default = () => <CardItem label="field" field="Test" />;

export const Price = () => <CardItem label="field" field="212" price />;

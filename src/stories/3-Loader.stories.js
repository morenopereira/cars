import React from 'react';
import Loader from '../components/Loader';

export default {
  title: 'Loader',
  component: Loader,
};

export const Default = () => (
  <div style={{ marginTop: '30px' }}>
    <Loader />
  </div>
);

export const MinHeight = () => <Loader minHeight />;

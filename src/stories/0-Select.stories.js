import React from 'react';
import Select from '../components/Select';

export default {
  title: 'Select',
  component: Select,
};

const fakeOptions = ['orange', 'limon'];

export const Default = () => <Select options={fakeOptions} />;

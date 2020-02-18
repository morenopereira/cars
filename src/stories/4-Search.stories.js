import React from 'react';
import Search from '../components/Search';

export default {
  title: 'Search',
  component: Search,
};

export const Default = () => (
  <Search
    disableSelect={{}}
    onChange={() => {}}
    brandsOptions={['audi', 'bmw']}
    modelsOptions={['a1', 'a3']}
    yearsOptions={['2001', '2003']}
    versionOptions={[
      {
        versionId: '701f0eb7764832fdce094a592cdaf38c',
        version: '1.6 MSI TOTAL FLEX MANUAL',
      },
    ]}
    onCollapse={() => {}}
    collapsed={false}
  />
);

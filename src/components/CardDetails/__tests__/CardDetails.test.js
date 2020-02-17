import React from 'react';
import renderer from 'react-test-renderer';
import CardDetails from '../CardDetails';

describe('<CardDetails />', () => {
  it('renders correctly', () => {
    const fakeCar = {
      precoFipe: 50639,
      precoMinimo: 43900,
      precoMedio: 50596,
      tetoPrecoMedio: 49584,
      pisoPrecoMedio: 48066,
      tetoPrecoMedioVolanty: 46042,
      pisoPrecoMedioVolanty: 44524,
      precoMaximo: 59990,
      tetoPrecoConcessionaria: 40477,
      pisoPrecoConcessionaria: 35417,
      kmMedio: 24647,
      qtd: 174,
      brand: 'VOLKSWAGEN',
      model: 'POLO',
      version: '1.6 MSI TOTAL FLEX MANUAL',
      modelYear: 2018,
      versionId: '701f0eb7764832fdce094a592cdaf38c',
    };

    const tree = renderer.create(<CardDetails car={fakeCar} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

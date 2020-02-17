import React from 'react';
import renderer from 'react-test-renderer';
import CardItem from '../CardItem';

describe('<CardItem />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CardItem label="test" field="test" price />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

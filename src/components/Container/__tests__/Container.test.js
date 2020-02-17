import React from 'react';
import renderer from 'react-test-renderer';
import Container from '../Container';

describe('<Container />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Container>
          <h1>test</h1>
        </Container>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

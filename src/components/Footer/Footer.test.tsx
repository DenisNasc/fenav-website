import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import {render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '.';

describe('Footer Component', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
  });

  test('should match to the snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

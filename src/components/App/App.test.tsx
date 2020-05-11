import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '.';

describe('App Component', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('should render the text FENAV as a children', () => {
    const {getByTestId} = render(<App />);
    expect(getByTestId('App')).toHaveTextContent('FENAV');
  });

  test('should match to the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '.';

describe('Header Component', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });

  test('should match to the faculty name', () => {
    const {getByTestId} = render(<Header />);
    expect(getByTestId('header-title')).toHaveTextContent(/Faculdade de Engenharia Naval/);
  });

  describe('categories buttons', () => {
    test('should match to the categorie 1 name', () => {
      const {getByTestId} = render(<Header />);
      expect(getByTestId('categorie-1')).toHaveTextContent(/A Faculdade/);
    });

    test('should match to the categorie 2 name', () => {
      const {getByTestId} = render(<Header />);
      expect(getByTestId('categorie-2')).toHaveTextContent(/Como Ingressar/);
    });

    test('should match to the categorie 3 name', () => {
      const {getByTestId} = render(<Header />);
      expect(getByTestId('categorie-3')).toHaveTextContent(/Notícias/);
    });

    test('should match to the categorie 4 name', () => {
      const {getByTestId} = render(<Header />);
      expect(getByTestId('categorie-4')).toHaveTextContent(/Publicações/);
    });

    test('should match to the categorie 5 name', () => {
      const {getByTestId} = render(<Header />);
      expect(getByTestId('categorie-5')).toHaveTextContent(/Pós-Graduação/);
    });

    test('should match to the categorie 6 name', () => {
      const {getByTestId} = render(<Header />);
      expect(getByTestId('categorie-6')).toHaveTextContent(/Área do Aluno/);
    });
  });

  test('should match to the snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

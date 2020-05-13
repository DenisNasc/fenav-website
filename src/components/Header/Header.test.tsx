import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
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

  describe('categories buttons should contain the corret text inside them', () => {
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

  describe(`when an categories button to be clicked, then the page's title should match with the pattern "... – FENAV"`, () => {
    test('initial render should match with "FENAV – Faculdade de Engenharia Naval"', () => {
      expect(document.title).toBe('FENAV – Faculdade de Engenharia Naval');
    });

    test('should match with "A Faculdade – FENAV"', () => {
      const {getByTestId} = render(<Header />);
      const bttn = getByTestId('categorie-1');
      act(() => {
        bttn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
      });
      expect(document.title).toBe('A Faculdade – FENAV');
    });

    test('should match with "Como Ingressar – FENAV"', () => {
      const {getByTestId} = render(<Header />);
      const bttn = getByTestId('categorie-2');
      act(() => {
        bttn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
      });
      expect(document.title).toBe('Como Ingressar – FENAV');
    });

    test('should match with "Notícias – FENAV"', () => {
      const {getByTestId} = render(<Header />);
      const bttn = getByTestId('categorie-3');
      act(() => {
        bttn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
      });
      expect(document.title).toBe('Notícias – FENAV');
    });

    test('should match with "Publicações – FENAV"', () => {
      const {getByTestId} = render(<Header />);
      const bttn = getByTestId('categorie-4');
      act(() => {
        bttn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
      });
      expect(document.title).toBe('Publicações – FENAV');
    });

    test('should match with "Pós-Graduação – FENAV"', () => {
      const {getByTestId} = render(<Header />);
      const bttn = getByTestId('categorie-5');
      act(() => {
        bttn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
      });
      expect(document.title).toBe('Pós-Graduação – FENAV');
    });

    test('should match with "Área do Aluno – FENAV"', () => {
      const {getByTestId} = render(<Header />);
      const bttn = getByTestId('categorie-6');
      act(() => {
        bttn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
      });
      expect(document.title).toBe('Área do Aluno – FENAV');
    });
  });

  test('should match to the snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const initialState = {
  pagesTitles: [
    'A Faculdade',
    'Como Ingressar',
    'Notícias',
    'Publicações',
    'Pós-Graduação',
    'Área do Aluno',
  ],
};

const headerReducer = (state = initialState, action: HeaderReducerAction) => {
  switch (action.type) {
    default: {
      return {...state};
    }
  }
};

export default headerReducer;

export interface HeaderReducer {
  pagesTitles: string[];
}

export interface HeaderReducerAction {
  type: string;
  payload?: {
    currentPage?: number;
  };
}

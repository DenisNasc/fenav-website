import {SET_CURRENTPAGE} from '../../actions/header.actions';

const initialState = {
  tabValue: 0,
  currentPage: 0,
};

const headerReducer = (state = initialState, action: HeaderReducerAction) => {
  switch (action.type) {
    case 'SET_TABVALUE': {
      return {...state, tabValue: action.payload?.tabValue};
    }
    case SET_CURRENTPAGE: {
      return {...state, currentePage: action.payload?.tabValue};
    }
    default: {
      return {...state};
    }
  }
};

export default headerReducer;

export interface HeaderReducer {
  tabValue: number;
}

export interface HeaderReducerAction {
  type: string;
  payload?: {
    tabValue?: number;
    currentPage?: number;
  };
}

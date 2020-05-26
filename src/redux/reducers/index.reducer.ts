import {combineReducers} from 'redux';
import header, {HeaderReducer} from './header/index.reducer';

const reducers = {header};

const rootReducer = combineReducers(reducers);

export default rootReducer;

export interface RootReducer {
  header: HeaderReducer;
}

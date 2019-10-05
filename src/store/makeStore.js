import { createStore } from 'redux';
import reducers from '../reducers';

const makeStore = (initialState) => {
  return createStore(reducers, initialState);
};

export default makeStore;

import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from '../utils/localStorage';
import reducer from '../reducers/reducers';


function configureStore() {

  const store = createStore(
    reducer,
    loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 2000));

  return store;
}

export default configureStore;

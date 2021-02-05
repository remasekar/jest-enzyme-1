import { createStore,applyMiddleware } from 'redux';
import RootReducer from './reducers';
import ReduxThunk from 'redux-thunk';


const middlewares = [ReduxThunk];

const createStorewithmiddleware = applyMiddleware(...middlewares)(createStore);

export  const store = createStorewithmiddleware(RootReducer);

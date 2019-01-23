import {
  Store,
  createStore,
  applyMiddleware,
  Dispatch,
  Action,
  AnyAction
} from 'redux';
import thunkMiddleware, { ThunkMiddleware, ThunkDispatch } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createHashHistory, createBrowserHistory } from 'history';
import {
  persistStore,
  persistReducer,
  Persistor,
  createTransform
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { JsogService } from 'jsog-typescript';
const jsog = new JsogService();

import { AppState, InitialState } from './ApplicationState';

import * as Actions from './GlobalActions';
export { Actions };

import { RootReducer } from './RootReducer';

export const History = createBrowserHistory();

const JSOGTransform = createTransform(
  (inboundState, key) => jsog.serialize(inboundState),
  (outboundState, key) => jsog.deserialize(outboundState)
);

const persistConfig = {
  key: 'root',
  storage: storage,
  transforms: [JSOGTransform]
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export function ConfigureStore(): Store<AppState> {
  const composeEnhancers = composeWithDevTools({});
  const thunk: ThunkMiddleware<AppState, AnyAction> = thunkMiddleware;
  const store = createStore(
    persistedReducer,
    InitialState(),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}

export const persistor = (store: Store<AppState>): Persistor => {
  return persistStore(store);
};

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export interface ConnectedReduxThunkProps {
  dispatch: ThunkDispatch<AppState, any, AnyAction>;
}

export interface ConnectedState {
  AppState: AppState;
}

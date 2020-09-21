import { appReducer, appState } from 'reducers/appReducer';

export const mainReducer = ({
  appState
}, action) => {
  // middleware goes here, i.e calling analytics service, etc.
  return {
    appState: appReducer(appState, action)
  };
};

export const globalState = {
  appState
}
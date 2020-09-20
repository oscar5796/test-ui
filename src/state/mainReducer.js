import { appReducer, appState } from 'reducers/appReducer';

export const mainReducer = ({
  appState
}, action) => {
  // middleware goes here, i.e calling analytics service, etc.
  if (process.env.NODE_ENV === "development") {
    console.log(`%c dispatched action => `, 'background: blue; color: white');
    const actionKeys = Object.keys(action);
    actionKeys.forEach(
      (actionKey) => {
        console.log(`%c ${actionKey} => ${JSON.stringify(action[actionKey])}`, 'background: yellow; color: #008000')
      }
    );
  };
  return {
    appState: appReducer(appState, action)
  };
};

export const globalState = {
  appState
}
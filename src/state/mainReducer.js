import { appReducer, appState } from 'reducers/appReducer';
import { CONSTANTS } from 'constants/index';
import { actionTypes } from 'constants/actionTypes';


const setState = () => {
  const localStorageState = localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY);
  if (localStorageState) {
    return {
      people: JSON.parse(localStorageState)
    }
  } else {
    return appState
  }
}

export const mainReducer = ({appState}, action) => {
  // middleware goes here, i.e calling analytics service, etc.
  if (action.type === actionTypes.SET_NEW_DATA) {
    localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY, JSON.stringify(action.newData.people));
  }
  return {
    appState: appReducer(appState, action)
  };
};

export const globalState = {
  appState: setState()
}
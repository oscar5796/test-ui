import { actionTypes } from 'constants/actionTypes';

export const appState = {
  customTerms: {},
  configuration: {},
  workspaces: [],
  reportIds: [],
  loadingConfig: true,
  loadingCustomTerms: true,
  loadingWorkspaces: true,
  isUpdatingConfig: false,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    //case related to workspaces service call

    case actionTypes.FETCH_WORKSPACES_IN_PROGRESS:
      return {
        ...state,
        loadingWorkspaces: true
      };

    case actionTypes.FETCH_WORKSPACES_SUCCESS:
      return {
        ...state,
        workspaces: action.payload,
        loadingWorkspaces: false
      };

    case actionTypes.FETCH_WORKSPACES_FAILURE:
      return {
        ...state,
        loadingWorkspaces: false
      };

    //case related to termsand conditions service call

    case actionTypes.FETCH_TERMS_AND_CONDITIONS_IN_PROGRESS:
      return {
        ...state,
        loadingCustomTerms: true
      };

    case actionTypes.FETCH_TERMS_AND_CONDITIONS_SUCCESS:
      return {
        ...state,
        customTerms: {
          ...action.payload
        },
        loadingCustomTerms: false
      };

    case actionTypes.FETCH_TERMS_AND_CONDITIONS_FAILURE:
      return {
        ...state,
        loadingCustomTerms: false
      };

    //case related to header and footer configurations

    case actionTypes.FETCH_CONFIGURATIONS_IN_PROGRESS:
      return {
        ...state,
        loadingConfig: true
      };

    case actionTypes.FETCH_CONFIGURATIONS_SUCCESS:
      return {
        ...state,
        configuration: action.payload,
        loadingConfig: false
      };

    case actionTypes.FETCH_CONFIGURATIONS_FAILURE:
      return {
        ...state,
        loadingConfig: false
      };

    //case related to custom terms acceptance
    case actionTypes.CUSTOM_TERMS_ACCEPTANCE_IN_PROGRESS:
      return { ...state }

    case actionTypes.CUSTOM_TERMS_ACCEPTANCE_SUCCESS:
      return {
        ...state,
        customTerms: {
          ...state.customTerms,
          customTermsAndConditionsAcceptance: true
        }
      };

    case actionTypes.CUSTOM_TERMS_ACCEPTANCE_FAILURE:
      return {
        ...state,
        customTerms: {
          ...state.customTerms,
          customTermsAndConditionsAcceptance: false
        }
      };

    case actionTypes.UPDATING_APP:
      return {
        ...state,
        customTerms: {
          ...state.customTerms
        },
        isUpdatingConfig: true
      }

    default:
      return state;
  }
};
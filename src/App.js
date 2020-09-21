import React, { useEffect } from "react";
import { Route, Switch } from 'react-router';
import { HomeView } from 'views/HomeView/HomeView';
import { NotFoundView } from 'views/NotFoundView/NotFoundView';
import { Header } from 'components/Header/Header';
import { useStateValue } from 'state/store';
import { actionTypes } from 'constants/actionTypes';
import { CONSTANTS } from 'constants/index.js';

import "./App.css";

function App() {

  const [{ appState }, dispatch] = useStateValue();

  useEffect(() => {
    const localStorageItem = localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY);
    if (!localStorageItem && appState && appState.people) {
      localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY, JSON.stringify(appState.people));
    }
  }, []);

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <HomeView/>
        </Route>
        <Route path="*">
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

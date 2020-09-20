import React from "react";
import { Route, Switch } from 'react-router';
import { HomeView } from 'views/HomeView/HomeView';
import { NotFoundView } from 'views/NotFoundView/NotFoundView';
import { Header } from 'components/Header/Header';
import "./App.css";

function App() {
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

import React from 'react';
import './assets/styles/index.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import DetailItem from './components/DetailItem/DetailItem'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id" component={DetailItem} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
};

export default App;
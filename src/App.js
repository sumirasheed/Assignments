import React, { Component } from 'react';
//import './index.scss';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Profile  from './containers/Profile';
import Calculator  from './containers/Calculator';


class App extends  Component {
  
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Calculator} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </BrowserRouter>
     

    )
  }
}

export default App;

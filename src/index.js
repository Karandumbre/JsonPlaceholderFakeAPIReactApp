import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router,Redirect } from 'react-router-dom'
import List from './Components/List';
import Details from './Components/Details';

ReactDOM.render(
<Router>
  <div>
    <Route exact path="/" render={() => <Redirect to="/list" />}/>
    <Route path="/list" component={List} />
    <Route path="/details/:id" exact component={Details} />
  </div>
</Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

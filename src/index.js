import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';


import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'
import 'foundation-sites/dist/js/foundation.min.js';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.querySelector('#root')
);

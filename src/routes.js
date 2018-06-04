import React from 'react';
import {Route, IndexRoute} from 'react-router';
import PlotContainer from './containers/PlotContainer';
import App from './components/App';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={PlotContainer}></IndexRoute>
  </Route>
);
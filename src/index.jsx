// external modules
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { createHistory as history } from 'history';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// internal modules
import App from './components/app';
import ComponentToPrint from './containers/printElements/component_to_print';
import '../assets/stylesheets/application.scss';

const root = document.getElementById('root');
// render an instance of the component in the DOM
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/print" exact component={ComponentToPrint} />
        </Switch>
      </Router>
    </Provider>,
    root
  );
}

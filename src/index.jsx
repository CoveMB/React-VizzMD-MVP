// external modules
import TagManager from 'react-gtm-module';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// internal modules
import App from './components/App';
import '../assets/stylesheets/application.scss';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const tagManagerArgs = {
    gtmId: 'GTM-MM93V8P'
  };

  TagManager.initialize(tagManagerArgs);
}


const root = document.getElementById('root');
// render an instance of the component in the DOM
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
    root
  );
}

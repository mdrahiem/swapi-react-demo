import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './redux-store/containers/appContainer';
import { Provider } from 'react-redux'
import store from './redux-store/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();

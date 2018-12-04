import 'bulma/css/bulma.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

//combined reducers, initial state, middleware
const store = createStore(reducers, {}, applyMiddleware);

ReactDOM.render(
    <Provider store={store}>
        <App/> 
    </Provider>, document.querySelector('#root'));
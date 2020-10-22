import React from 'react';
import ReactDOM from 'react-dom';
//App组件 大写字母开头
import {Provider} from 'react-redux'
import store from './store'
import {persistor} from './store'
import {PersistGate} from 'redux-persist/lib/integration/react';
import Router from './router/index';
import './index.css';
import 'antd/dist/antd.css'
ReactDOM.render(
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <Router />
     </PersistGate>
  </Provider>,
  document.getElementById('root')
);

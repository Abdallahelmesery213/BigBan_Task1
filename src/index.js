import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import "antd/dist/antd.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


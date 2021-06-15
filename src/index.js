import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import reducer from 'Store/reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RouterComp  from './Router';

import './i18n';

import 'Style/style.css';
import 'Style/style-mobile.css';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Suspense fallback="Loading">
      <Provider store={store}><RouterComp /></Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals;

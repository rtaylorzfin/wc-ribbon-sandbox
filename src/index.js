import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyPolyfills, defineCustomElements } from '@geneontology/wc-ribbon-strips/loader';
import { applyPolyfills as applyPolyfills2, defineCustomElements as defineCustomElements2 } from '@geneontology/wc-ribbon-table/loader';

ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

applyPolyfills().then(() => {
    defineCustomElements(window);
});

applyPolyfills2().then(() => {
    defineCustomElements2(window);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

/*
    index.jsはApp.jsxファイルからエクスポートされたAppコンポーネントを読み込み
    それをReactDomに渡すことでrender(描画)している

    yarn start
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();

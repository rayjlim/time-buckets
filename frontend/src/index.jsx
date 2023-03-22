import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ENVIRONMENT } from './constants';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';
import './ribbon.css';

const showDevRibbon = ENVIRONMENT === 'development';

ReactDOMClient.createRoot(document.getElementById('root')).render(
  <>
    {showDevRibbon && (
      <a
        className="github-fork-ribbon"
        href="#dev"
        data-ribbon="Development"
        title="Development"
      >
        Development
      </a>
    )}
    <App />
  </>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

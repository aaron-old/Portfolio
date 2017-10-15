/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import App from './containers/App/App';
import './index.css';
import registerServiceWorker from './utils/registerServiceWorker';

render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.getElementById('root'),
);
registerServiceWorker();

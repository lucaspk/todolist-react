import './index.css'

import React from 'react'
import ReactDOM from 'react-dom';
import {render} from 'react-dom'

import App from './App'

//render(<App/>, document.querySelector('#app'))
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

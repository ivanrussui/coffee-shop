import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';

let cards = [
  {id: 1, title: 'Solimo Coffee Beans 2 kg', price: '10.73$'},
  {id: 2, title: 'Presto Coffee Beans 1 kg', price: '15.99$'},
  {id: 3, title: 'AROMISTICO Coffee 1 kg', price: '6.99$'}
]

ReactDOM.render(
  <React.StrictMode>
    <App cards={cards} />
  </React.StrictMode>,
  document.getElementById('root')
);

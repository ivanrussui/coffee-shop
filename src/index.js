import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';

let cards = [
  {id: 1, title: 'Solimo Coffee Beans 2 kg', price: '10.73$'},
  {id: 2, title: 'Presto Coffee Beans 1 kg', price: '15.99$'},
  {id: 3, title: 'AROMISTICO Coffee 1 kg', price: '6.99$'}
]

let cards2 = [
    {id: 1, title: 'AROMISTICO Coffee 1 kg', price: '10.73$', country: 'Brazil'},
    {id: 2, title: 'AROMISTICO Coffee 1 kg', price: '15.99$', country: 'Kenya'},
    {id: 3, title: 'AROMISTICO Coffee 1 kg', price: '6.99$', country: 'Columbia'},
    {id: 4, title: 'AROMISTICO Coffee 1 kg', price: '10.73$', country: 'Brazil'},
    {id: 5, title: 'AROMISTICO Coffee 1 kg', price: '15.99$', country: 'Kenya'},
    {id: 6, title: 'AROMISTICO Coffee 1 kg', price: '6.99$', country: 'Columbia'},
]

ReactDOM.render(
  <React.StrictMode>
    <App cards={cards} cards2={cards2} />
  </React.StrictMode>, document.getElementById('root')
);

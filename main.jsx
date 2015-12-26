// main.jsx

// IMPORT REACT & REACT_DOM
//=============================================
import React from 'react';
import ReactDOM from 'react-dom';

// IMPORT REACT COMPONENT
//=============================================
import App from './components/app.jsx';
import Todo from './components/todo.jsx';
import { Test, News } from './components/simpleClass';
import ProductsList from './components/products.jsx';

// RENDER COMPONENT
//=============================================
ReactDOM.render(<App name="My Test" />, document.getElementById('react-root'));
ReactDOM.render(<Todo name="My Test" />, document.getElementById('react-root'));

// Could come from an API, LocalStorage, another component, etc...
var products = [
  { id: 1,  name: 'Toast', price: 1499 },
  { id: 2, name: 'Bacon', price: 3245 },
  { id: 3, name: 'Coffee', price : 300 }
];

ReactDOM.render(<ProductsList products={products} />, document.getElementById('react-root'));

// SIMPLE CLASS CALL
//=============================================
var newInst = new Test("Hiren");
newInst.getName();
newInst.setName("Jayesh");
newInst.getName();

var newInst2 = new News("Parin");
newInst2.getName();
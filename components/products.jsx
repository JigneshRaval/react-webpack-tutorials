/*
Combining components together
The most fundamental and useful part of React is that
you can create any number of components and nest them
just like you would any HTML tag. You pass down data
to your components from parent components in a one-way
data flow.
Note: If you use something like Flux/Reflux you have a bit
power when it comes to data storage and event handling.
Using a Flux-like framework with React is very helpful.
*/
import React from "react";
import Todo from "./todo.jsx";

export default class ProductsList extends React.Component {
  render() {
    var products = this.props.products.map(function(product, index) {
      return (
        <tr key={index}>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });
    
    return (
      <div>
        <table border="1" width="100%">
          <tbody>
            {products}      
          </tbody>
        </table>
      
        <Todo />
      </div>
    );
  }
}
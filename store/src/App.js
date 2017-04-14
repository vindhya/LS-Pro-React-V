import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Store</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </div>
          <p className="">
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
          </p>
        </div>
      </Router>
    );
  }
}

export default App;

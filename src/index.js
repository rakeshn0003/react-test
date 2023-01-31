import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import Topics from './Topics';

class App extends Component {
  constructor() {
    super();
    this.state = {
      variable: 'foo',
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ data });
      });
  };
  onValueChange(event) {
    this.setState({ variable: event.target.value });
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Parent State False</Link>
          </li>
          <li>
            <Link to="/topics">Parent State True</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />

        <div>
          <h5>Two ways data binding</h5>
          <input
            type="text"
            value={this.state.variable}
            onChange={this.onValueChange}
          />
          <br />
          value : {this.state.variable}
        </div>

        <div>
          <p>fetch data from API</p>
          <ul>
            {this.state.data &&
              this.state.data.map((user) => <li id={user.id}>{user.name}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

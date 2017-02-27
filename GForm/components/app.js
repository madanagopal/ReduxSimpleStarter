import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>React simple starter11
      {this.props.children}
      </div>
    );
  }
}

import React, { Component } from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        opened: false
    };
    this.handler = this.handler.bind(this);
  }

  // This method will be sent to the child component
  handler() {
    this.setState({
        opened: !this.state.opened
    });
  }

  // Render the child component and set the action property with the handler as value
  render() {
    return (
      <div>
        Parent Opened State: {this.state.opened ? 'true': 'false'}
      </div>
    )
  }
}
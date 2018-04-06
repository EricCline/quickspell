import React, { Component } from 'react';

export default class FilterSubmit extends Component {

  render () {
    return (
      <form  onSubmit={this.props.onSubmit}>
        <input type="submit" value="Filter" />
      </form>
    )
  }
}


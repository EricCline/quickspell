import React, { Component } from 'react';

export default class PdfSubmit extends Component {
  render () {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input type="submit" value="Save to PDF" />
      </form>
    )
  }
}


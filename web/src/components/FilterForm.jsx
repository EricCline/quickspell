import React, { Component } from 'react';
import {connect} from 'react-redux';
import {dashboard} from "../actions";

class FilterForm extends Component {

  render() {
    const classname = this.props.classname;
    const level = this.props.level;
    return (
      <form onSubmit={this.props.onSubmit}>
        <div>
        <label>Class</label>
        <input
          id="class"
          value={classname}
          placeholder="Enter class here..."
          onChange={(e) => this.props.updateClassname(
            e.target.value
          )}
          required />
        </div>
        <div>
        <label>Level</label>
        <input
          id="level"
          value={level}
          placeholder="(optional)"
          onChange={(e) => this.props.updateLevel(e.target.value)}/>
        </div>
        <input type="submit" value="Filter" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    classname: state.dashboard.classname,
    level: state.dashboard.level,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateClassname: (classname) => {
      dispatch(dashboard.updateClassname(classname));
    },
    updateLevel: (level) => {
      dispatch(dashboard.updateLevel(level));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);

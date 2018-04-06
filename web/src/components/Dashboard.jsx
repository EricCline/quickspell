import React, { Component } from 'react';
import {connect} from 'react-redux';

import {dashboard} from "../actions";
import SpellList from './SpellList';
import FilterForm from './FilterForm';
import FilterSubmit from './FilterSubmit';
import PdfSubmit from './PdfSubmit';


class Dashboard extends Component {
  submitFilter = (e) => {
    e.preventDefault();
    this.props.fetchSpells(this.props.classname, this.props.level);
  }

  spellsToPdf = (e) => {
    e.preventDefault();
    this.props.spellsToPdf(this.props.classname, this.props.level);
  }

  componentDidMount() {
    this.props.fetchSpells(this.props.classname, this.props.level);
  }

  render() {
    return (
      <div>
        <h2>Welcome to Quickspell!</h2>
        <FilterForm/>
        <FilterSubmit onSubmit={this.submitFilter}/>
        <PdfSubmit onSubmit={this.spellsToPdf}/>
        <hr/>
        <SpellList spells={this.props.spells}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    spells: state.dashboard.spells,
    classname: state.filterForm.classname,
    level: state.filterForm.level,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSpells: (classname="", level="") => {
      dispatch(dashboard.fetchSpells(classname, level));
    },
    spellsToPdf: (classname="", level="") => {
      dispatch(dashboard.spellsToPdf(classname, level));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

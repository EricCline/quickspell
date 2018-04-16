import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid, Col, Row} from 'react-bootstrap';

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
      <Grid fluid>
        <Row className="show-grid">
          <Col md={12}>
            <h2>Welcome to Quickspell!</h2>
            <hr/>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={6}>
            <h2>Spell Selector</h2>
            <hr/>
            <SpellList spells={this.props.spells} spellAction={this.props.selectSpell} actionName="Add Spell"/>
          </Col>
          <Col md={6}>
            <h2>Selected Spells</h2>
            <hr/>
            <SpellList spells={this.props.selectedSpells} spellAction={this.props.removeSpell} actionName="Remove Spell"/>
          </Col>
        </Row>
      </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    spells: state.dashboard.spells,
    selectedSpells: state.dashboard.selectedSpells,
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
    },
    selectSpell: (spell) => {
      dispatch(dashboard.selectSpell(spell));
    },
    removeSpell: (spell) => {
      dispatch(dashboard.removeSpell(spell));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

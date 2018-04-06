import React, { Component } from 'react';
import {connect} from 'react-redux';
import {TileLayout} from 'pui-react-tile-layout';

import {dashboard} from "../actions";
import Spell from './Spell';
import FilterForm from './FilterForm';


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

  renderSpell(spell) {
    return <Spell spell={spell} key={spell.name}/>
  }

  render() {
    return (
      <div>
        <h2>Welcome to Quickspell!</h2>
        <FilterForm onSubmit={this.submitFilter}/>
        <hr/>
        <form onSubmit={this.spellsToPdf}>
          <input type="submit" value="Save to PDF" />
        </form>
        <h3>Spells</h3>
        <hr/>
          <TileLayout columns={3}>
            {this.props.spells.map(spell => (this.renderSpell(spell)))}
          </TileLayout>
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

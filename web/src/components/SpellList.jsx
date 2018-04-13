import React, { Component } from 'react';
import {TileLayout} from 'pui-react-tile-layout';
import Spell from './Spell';

export default class SpellList extends Component {

  renderSpell(spell) {
    return <Spell spell={spell} key={spell.name}/>
  }

  render() {
    return (
      this.props.spells.map(spell => (this.renderSpell(spell)))
    )
  }
}

import React, { Component } from 'react';
import Spell from './Spell';

export default class SpellList extends Component {

  renderSpell(spell) {
    return <Spell
             spell={spell}
             key={spell.name}
             action={this.props.spellAction}
             actionName={this.props.actionName}
           />
  }

  render() {
    return (
      this.props.spells.map(spell => (this.renderSpell(spell)))
    )
  }
}

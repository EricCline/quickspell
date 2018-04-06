import React, { Component } from 'react';
import {TileLayoutItem} from 'pui-react-tile-layout';
import {ClickableAltPanel} from 'pui-react-panels';

export default class Spell extends Component {
  render() {
    return (
      <TileLayoutItem>
        <ClickableAltPanel>
          <div className="spell-title">{this.props.spell.name}</div>
          <div className="level-school">{this.props.spell.level_school}</div>
          <div> <span className="meta">Casting Time:</span> <span>{this.props.spell.casting_time}</span></div>
          <div> <span className="meta">Range:</span> <span>{this.props.spell.range}</span></div>
          <div> <span className="meta">Components:</span> <span>{this.props.spell.components}</span></div>
          <div> <span className="meta">Duration:</span> <span>{this.props.spell.duration}</span></div>
          <br></br>
          {this.props.spell.description.map((description_part, index) => (
            <div key={index}>{description_part}</div>
          ))}
          <br></br>
          <br></br>
        </ClickableAltPanel>
      </TileLayoutItem>
    );
  }
}

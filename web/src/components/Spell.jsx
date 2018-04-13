import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

export default class Spell extends Component {

  render() {
    return (
	<Panel>
          <Panel.Heading>
            <Panel.Title toggle>
              {this.props.spell.name} - {this.props.spell.level_school}
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
	      <div> <span className="meta">Casting Time:</span> <span>{this.props.spell.casting_time}</span></div>
	      <div> <span className="meta">Range:</span> <span>{this.props.spell.range}</span></div>
	      <div> <span className="meta">Components:</span> <span>{this.props.spell.components}</span></div>
	      <div> <span className="meta">Duration:</span> <span>{this.props.spell.duration}</span></div>
	      <br></br>
	      {this.props.spell.description.map((description_part, index) => (
		<div key={index}>{description_part}</div>
	      ))}
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
    );
  }
}

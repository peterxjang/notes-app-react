import React, { Component } from 'react';

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <button className="toolbar-button" onClick={this.props.onNewNote}>New</button>
        <button className="toolbar-button" onClick={this.props.onDeleteNote}>Delete</button>
        <input className="toolbar-search" type="text" placeholder="Search..."></input>
      </div>
    );
  }
}

export default Toolbar;

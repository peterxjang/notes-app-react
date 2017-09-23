import React, { Component } from 'react';
import {formatTimestamp} from '../helpers';

class NoteEditor extends Component {
  handleChange = (event) => {
    this.props.onNoteEditorChange(event.target.value);
  }

  render() {
    if (this.props.selectedNote) {
      return (
        <div className="note-editor">
          <p className="note-editor-info">
            {formatTimestamp(this.props.selectedNote.timestamp)}
          </p>
          <textarea className="note-editor-input"
            value={this.props.selectedNote.body}
            onChange={this.handleChange}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default NoteEditor;

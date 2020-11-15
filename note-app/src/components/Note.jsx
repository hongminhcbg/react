import React from 'react';
import '../csss/flex.css'
import '../csss/note.css'
class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: null,
        }

    }
    
    render() {
        return(
            <div className="note-container flex-row">
                <div className="note-text base">
                    <p> This is content of task </p>
                </div>
                <div className="base width-10 flex-column">
                    <button className="note-button note-button-exit"> X </button>
                    <button className="note-button note-button-done"> V </button>
                </div>
            </div>
        );
    }
}

export default Note;
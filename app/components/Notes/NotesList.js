import React from 'react';

class NotesList extends React.Component{
	render() {
		var notes = this.props.notes.map((note, index) => {
			return <li className="list-group-item" key={index}> {note} </li>;
		});
		return (
			<ol className="list-group">
				{notes}
			</ol>
		);
	}
}

export default NotesList;
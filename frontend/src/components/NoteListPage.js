import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import AddButton from './AddButton'

function NoteListPage() {

	const [notes,setnotes] = useState([])

	const getnotes = async () =>{
		const response = await fetch('https://notesappboi.herokuapp.com/api/notes/')
		const data = await response.json()
		setnotes(data)
	}

	useEffect(() =>{
		getnotes()
	},[])

	return (

		<div className="notes">
			<div className="notes-header">
				<h2 className="notes-title">&#9782; Notes</h2>
				<p className="notes-count">{notes.length}</p>
			</div>

			<div className = 'notes-list'>
				{notes.map((note, index) => (
					<Link to = {`/notes/${note.slug}`}>
						<div className = "notes-list-item">
							<h3 key={index}>{note.body}</h3>
						</div>
					</Link>
				))}
			</div>
			<AddButton />
		</div>
	)
}

export default NoteListPage
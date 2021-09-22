import React, { useEffect, useState } from 'react'
import {ReactComponent as BlahBlah} from "../assets/chevron-left.svg"

function NotePage({ match,history }) {

	const noteslug = match.params.slug
	const [note,setnote] = useState(null)
	const [blah,setblahbla] = useState([])
	console.log(blah)
	
	const getnotes = async () =>{
		const response = await fetch('https://notesappboi.herokuapp.com/api/notes/')
		const data = await response.json()
		setblahbla(data)
	}

	const getnote = async () =>{
		if (noteslug === 'new') return
		const response = await fetch(`https://notesappboi.herokuapp.com/api/notes/${noteslug}/`)
		const data = await response.json()
		setnote(data)
	}

	useEffect(() => {
		getnote()
	},[noteslug])

	const updatenote = async () =>{
		fetch(`https://notesappboi.herokuapp.com/api/notes/${noteslug}/update/`,{
			method:"PUT",
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify(note)
		})
		history.push("/")
		getnotes()
	}

	const createnote = async () =>{
		fetch('https://notesappboi.herokuapp.com/api/notes/create',{
			method:"POST",
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify(note)
		})
		history.push('/')
		getnotes()
	}

	const handlesubmitbruh = () =>{
		updatenote()
	}

	const deletenote = async () =>{
		fetch(`https://notesappboi.herokuapp.com/api/notes/${noteslug}/delete/`,{
			method:"DELETE",
			headers:{
				'Content-Type':'application/json'
			},
		})
		history.push("/")
		getnotes()
	}
 
	return (
		<div className = "note">
			<div className = "note-header">
				<h3>
					<BlahBlah onClick = {handlesubmitbruh}/>
				</h3>
				{noteslug !== "new" ? (
					<button onClick = {deletenote}>Delete</button>
				):(
					<button onClick = {createnote}>Done</button>
				)}
			</div>
			<textarea defaultValue = {note?.body} onChange = {(e) => setnote({ ...note, 'body': e.target.value })}></textarea>
		</div>
	)
}

export default NotePage
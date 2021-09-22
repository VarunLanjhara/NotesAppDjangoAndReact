import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Nerd} from "../assets/add.svg"

function AddButton() {
    return (
        <div>
            <Link to = '/notes/new' className = "floating-button">
                <Nerd />
            </Link>
        </div>
    )
}

export default AddButton

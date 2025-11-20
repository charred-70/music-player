import React, { use } from 'react'
import { useState, useEffect } from 'react'

const AddButton = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title, !artist) {
            return;
        }
    }
    /*
    if user presses button 
    display text boxes for input
    then add songs to supabase
    */
    return (
        <button>
            <i class="fa-solid fa-play"></i>
            Add Song
        </button>
    )
}

export default AddButton
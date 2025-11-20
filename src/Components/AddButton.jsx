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

    return (
        <button>
            <i class="fa-solid fa-play"></i>
            Add Song
        </button>
    )
}

export default AddButton
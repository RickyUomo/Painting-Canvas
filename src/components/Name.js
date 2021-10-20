import React, { useState } from 'react'
import '../styles.css'

export default function Name() {

    const [name, setName] = useState('');

    return (
        <label className="header-name">
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
                // select all the string when clicking
                onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
                placeholder="Untitled"
            />
        </label>
    )
}

import React from 'react';
import axios from 'axios';

/*
User API Key 3e73b5b0d801c813297e4563d1a243f6
*/

export default function devotions() {
axios.defaults.headers.common['Authorization'] = '3e73b5b0d801c813297e4563d1a243f6'
axios.get(`https://bibles.org/v2/chapters/eng-KJVA:1Cor.2/verses.js?include_marginalia=true`)
.then(res => {
    console.log(res.data)
})

    return (
        <div>
            <h1>Daily Devotions</h1>
        </div>
    )
}


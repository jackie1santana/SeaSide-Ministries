import React from 'react'

export default function ask_juanita() {
    return (
        <div>
            <h1>Ask Pastor Juanita</h1>
            <form>
                <label>
                    <input type="text" name="name" value="Name" />
                    <br/>
                    <input type="text" name="name" value="Email" />
                    <br/>
                    <input type="text" name="name" value="Leave a Comment .." />
                </label>
                <br/>
                    <input type="submit" value="Send Message" />
            </form>
        </div>
    )
}

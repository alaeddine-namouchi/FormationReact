import React from 'react'
import './task.css'

const HelloWorld = () => {
    return "Hi"
}

function Task(){
    return (
        <>
        <div class="task">
            <div class="title">
                Learn Html
            </div>
            <div class="actions">
                <span>delete</span>
                
                <span>update</span>
            </div>
        </div>
        </>
        )
}

export default Task
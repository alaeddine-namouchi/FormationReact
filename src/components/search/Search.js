import React from 'react'


function Search(){
    const addTask = "Add a task"
    const steps = ["enter the task", "click on button" ]
    const loading=false
    return (
        <>
        <form action="" class="form">
            <ul>
            {steps.map(e=><li>{e}</li>)}
            </ul>
            <input type="text" name="task" id="" style={{backgroundColor:'yellow'}}/>
            <button type="submit">{ addTask }</button>
            {loading&& <div>loading...</div>}
            {loading ? <div>loading...</div> : <p>no think</p>}
        </form>
        </>
        )
}

export default Search
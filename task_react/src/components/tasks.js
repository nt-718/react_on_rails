import React from 'react'

function tasks(props) {
  return (
    <div>
        <h1>These tasks are from the API</h1>
        {props.tasks.map((task) => {
            return (
                <div key={task.id}>
                    <h2>{task.title}</h2>
                    <h2>{task.content}</h2>
                </div>
            );
        })}
    </div>
  )
}

export default tasks
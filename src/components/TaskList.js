import React from 'react'

function TaskList({tasklist, setTasklist}) {
  return (
    <section className='showTask'>
        <div className='head'>
          <div>
            <span className='title'> TODO </span>
            <span className='count'>{tasklist.length}</span>
          </div>
          <button className='clearAll'>Clear All</button>
        </div>
        <ul>
          { tasklist.map((tasks)=>(
             <li>
             <p>
               <span className='name'>{tasks.name}</span>
               <span className='time'>{tasks.time}</span>
             </p>
             <i class="bi bi-pencil-square"></i>
             <i class="bi bi-trash"></i>
           </li>
          )
          )}
        </ul>
    </section>
  )
}

export default TaskList

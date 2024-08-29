import React from 'react'

function TaskList({tasklist, setTasklist, task, setTask}) {

  function handleEdit(id){

  }

  const handleDelete = (id) => {
      const updatedTasklist = tasklist.filter(tasks => tasks.id !== id);
      setTasklist(updatedTasklist);
  }

  return (
    <section className='showTask'>
        <div className='head'>
          <div>
            <span className='title'> TODO </span>
            <span className='count'>{tasklist.length}</span>
          </div>
          <button className='clearAll' onClick={()=> setTasklist([])}>Clear All</button>
        </div>
        <ul>
          { tasklist.map((tasks)=>(
             <li key={tasks.id}>
             <p>
               <span className='name'>{tasks.name}</span>
               <span className='time'>{tasks.time}</span>
             </p>
             <i onClick={()=>handleEdit(tasks.id)} class="bi bi-pencil-square"></i>
             <i onClick={()=>handleDelete(tasks.id)} class="bi bi-trash"></i>
           </li>
          )
          )}
        </ul>
    </section>
  )
}

export default TaskList

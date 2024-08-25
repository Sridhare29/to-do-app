import React from 'react'

function TaskList() {
  const tasks = [
    {id: 1001, name: "Task A", time:"02:09:03 AM 25/8/2014"},
    {id: 1002, name: "Task B", time:"05:09:03 PM 25/8/2014"},
    {id: 1003, name: "Task c", time:"09:09:03 PM 25/8/2014"},
  ]
  return (
    <section className='showTask'>
        <div className='head'>
          <div>
            <span className='title'> TODO </span>
            <span className='count'>0</span>
          </div>
          <button className='clearAll'>Clear All</button>
        </div>
        <ul>
          <li>
            <p>
              <span className='name'>Task A</span>
              <span className='time'>02:09:03 AM 25/8/2014</span>
            </p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash"></i>
          </li>
        </ul>
    </section>
  )
}

export default TaskList

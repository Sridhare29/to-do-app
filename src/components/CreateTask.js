import React from 'react'

function CreateTask({tasklist, setTasklist}) {

  const addTask = (e) => {
    e.preventDefault();

    const date = new Date();
    console.log(date);
    console.log(e.target.task.value);

    const newTask = {
      id : date.getTime(),
      name : e.target.task.value,
      time : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTasklist([...tasklist, newTask]);
    e.target.task.value = "";
  }
  return (
    <section className='addTask'>
      <form onSubmit={addTask}>
        <input type='text' name='task' autoComplete='off' placeholder='add task' maxLength='30'/>
        <button type='submit'>Add</button>
      </form>
    </section>
  )
}

export default CreateTask

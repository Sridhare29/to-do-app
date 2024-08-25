import React from 'react'

function CreateTask() {
  return (
    <section className='addTask'>
      <form>
        <input type='text' name='task' autoComplete='off' placeholder='add task' maxLength='30'/>
        <button type='submit'>Add</button>
      </form>
    </section>
  )
}

export default CreateTask

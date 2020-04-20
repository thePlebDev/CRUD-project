import React from 'react'

import useForm from './useForm'
import validate from './validateForm'
import './modal.css'



const Modal = (props)=>{
const {handleInputChange,handleSubmit,user} = useForm(props, validate)


  if(!props.show){
    return null
  }else{
    return(
      <div className='modalForm' >
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' value={user.name} onChange={handleInputChange} required />

            <label htmlFor='age'>Age</label>
            <input id='age' type='number' name='age' value={user.age} onChange={handleInputChange}  required/>

            <label htmlFor='height'>Height</label>
            <input id='height' type='text' name='height' value={user.height} onChange={handleInputChange} />
            <button className='modalButton'>Add new profile</button>
          </form>
      </div>
    )
  }
}

export default Modal

import React from 'react'

import useForm from './useForm'
import validate from './validateForm'
import './modal.css'



const Modal = (props)=>{
const {handleInputChange,handleSubmit,user,error} = useForm(props, validate)


  if(!props.show){
    return null
  }else{
    return(
      <div className="modalForm">
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor='name'>dude</label>
            <input type='text' id='name' name='name' value={user.name} onChange={handleInputChange} className={` ${ error.name && "inputError"}`}/>
            { error.name && <p className="error" >{error.name} </p> }

            <label htmlFor='age'>Age</label>
            <input id='age' type='number' name='age' value={user.age} onChange={handleInputChange} className={` ${ error.age && "inputError"}`} />
            { error.age && <p className="error" >{error.age} </p> }

            <label htmlFor='height'>Height</label>
            <input id='height' type='text' name='height' value={user.height} onChange={handleInputChange} />
            <button className='modalButton'>Add new profile</button>
          </form>
      </div>
    )
  }
}

export default Modal

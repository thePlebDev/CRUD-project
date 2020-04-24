import React, { useState } from 'react'

import useForm from "./useForm";

import './editForm.css';



const EditUserForm = props =>{
  const [user,setUser] = useState(props.currentUser)
  const {handleChange,handleSubmit,error} =useForm(props,user,setUser)


return (
  <div className="modalForm">
    <form onSubmit={handleSubmit}>
      <div>
        <div className="form-div-one">
          <label htmlFor='name' className="label-name" >
            Name*
          </label>
          <input type="text" id="name" name="name" value={user.name} onChange={handleChange} className={`${error.name && "inputError"}`}/>
          {error.name && <p className="error" >{error.name}</p>}
        </div>

        <label htmlFor='age' >Age*</label>
        <input type="number" id="age" name="age" value={user.age} onChange={handleChange}/>
        {error.age && <p className="error" >{error.age}</p>}

        <label htmlFor='age' >Height:</label>
        <input type="text" id="age" name="height" value={user.height} onChange={handleChange}/>
        <div className="errorButtons">
            <button className='modalButton'>Update profile</button>
            <button onClick={() => props.setEditing(false)} className='modalButton cancel'>Cancel</button>
        </div>
      </div>
    </form>
  </div>
)

}

export default EditUserForm

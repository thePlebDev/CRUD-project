import React from 'react'

import './profile.css'

const Profile = (props)=>{
  
  return(
    <div className="profiles">
    {
      props.data.map(data=>(
        <div key={data.id}>
          <h3>{data.name}</h3>
          <h3>{data.age}</h3>
          <h3>{data.height}</h3>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))
    }
    </div>
  )
}


export default Profile

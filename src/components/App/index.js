import React,{ useState } from 'react';

import './app.css'
import Profiles from '../Profile'
import NavBar from '../NavBar'
import EditUserForm from '../EditProfileForm'



const App =()=>{
  const profileData = [
    {id:1, name: 'bob', age:33, height: "5'7"},
    {id:2, name: 'Tim', age:40, height: "5'9"},
    {id:3, name: 'Bethany', age:45, height: "6'5"}
  ]
  const initialFormState = {id:null, name:'', age:"",height:""}


  const [profiles, setProfiles] = useState(profileData)
  const [editing,setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addProfile = (profile) =>{
    profile.id = profiles.length + 1
    console.log(profiles)
    setProfiles([...profiles,profile])
  }

  const deleteProfile = id =>{
    setProfiles(profiles.filter(profile => profile.id !== id))
  }

  const editRow = profile => {
    setEditing(true)

    setCurrentUser({id:profile.id,name:profile.name,age:profile.age, height:profile.height })
  }

  const updateUser = (id, updatedUser) =>{
    setEditing(false)

    setProfiles(profiles.map(user =>(user.id === id ? updatedUser: user)))
  }

  return(
    <div>
      <NavBar addProfile={addProfile} />
      <div className="editForm">
        {editing ? (
          <div>
            <EditUserForm setEditing={setEditing}  currentUser={currentUser} updateUser={updateUser} />
          </div>
        ):(
          <div></div>
        )}
      </div>
      <div className='container'>
      <h1>Crud Dating Profile</h1>
        <div className='profile-container'>
          <Profiles  data={profiles} deleteProfile={deleteProfile} editRow={editRow}/>
        </div>
      </div>
    </div>
  )
}


export default App

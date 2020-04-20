import React,{ useState } from 'react';

import './app.css'
import Profiles from '../Profile'
import NavBar from '../NavBar'



const App =()=>{
  const profileData = [
    {id:1, name: 'bob', age:33, height: "5'7"},
    {id:2, name: 'Tim', age:40, height: "5'9"},
    {id:3, name: 'Bethany', age:45, height: "6'5"}
  ]



  const [profiles, setProfiles] = useState(profileData)

  const addProfile = (profile) =>{
    profile.id = profiles.length + 1
    console.log(profiles)
    setProfiles([...profiles,profile]) // this is not working for some reason


  }

  return(
    <div>
      <NavBar addProfile={addProfile} />
      <div className='container'>
      <h1>Crud Dating Profile</h1>
        <div className='profile-container'>
          <Profiles  data={profiles}/>
        </div>
      </div>
    </div>
  )
}


export default App

import React,{ useState } from 'react';

import './navbar.css'
import Modal from '../Modal'



const NavBar = (props)=>{
  let [modal,setModal] = useState(false);

  return(
    <div className="navbar">
      <div className="brand-title" >Crud Profiles</div>
      <div className="navbar-links">
        <button className='navButton' onClick={()=> setModal(modal = true)}>New Profile</button>

      </div>

      <Modal show={modal} addProfile={props.addProfile} setShow={setModal}/>
    </div>
  )
}

export default NavBar

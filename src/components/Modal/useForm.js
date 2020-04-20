import { useState } from 'react'


const useForm = (props, validate) => {
  const initialFormState = {name:"",age:'',height:""}
  const initialFormErrorState = {name:"",age:'',height:""}
  const [user,setUser] = useState(initialFormState)
  const [error,setError] = useState(initialFormErrorState)



  const handleInputChange = event =>{
    event.preventDefault()
    const {name, value} = event.target
    setUser({...user,[name]:value})

  }

  const handleSubmit=(event)=>{

      event.preventDefault()
      setUser(initialFormState)

      props.addProfile(user)
      props.setShow(false)
    }
    return{
      handleInputChange,
      handleSubmit,
      user
    }

  }

export default useForm

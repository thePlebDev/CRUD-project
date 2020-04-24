import { useState, useEffect } from 'react'

import validate from './validateEditForm'



const useForm = (props,user,setUser)=>{
  const [error,setError] = useState({})
  const [isSubmitting,setIsSubmitting] = useState(false);

  const handleChange = event =>{
    const { name, value  } = event.target;
    setUser({...user,[name]:value})
  }

  const handleSubmit = event =>{
      event.preventDefault()
      setError(validate(user))
      setIsSubmitting(true)
  }

  useEffect(()=>{
    if(Object.keys(error).length ===0 && isSubmitting){
      props.updateUser(user.id,user)
    }

  }, [error])

  return {
    handleChange,
    handleSubmit,
    error
  }
}

export default useForm

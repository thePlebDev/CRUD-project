import { useState, useEffect } from 'react'


const useForm = (props, validate) => {
  const initialFormState = {name:"",age:'',height:""}
  const initialFormErrorState = {}
  const [user,setUser] = useState(initialFormState)
  const [error,setErrors] = useState(initialFormErrorState)
  const [isSubmitting,setIsSubmitting] = useState(false);



  const handleInputChange = event =>{
    event.preventDefault()
    const {name, value} = event.target
    setUser({...user,[name]:value})

  }

  const handleSubmit=(event)=>{

      event.preventDefault()
      setErrors(validate(user))
      setIsSubmitting(true)

    }

    useEffect(()=>{
      //check to see if there are errors or not
      if(Object.keys(error).length === 0 && isSubmitting){
        props.addProfile(user)
        setUser(initialFormState)
        props.setShow(false)
      }

    },[error])

    return{
      handleInputChange,
      handleSubmit,
      user,
      error
    }

  }

export default useForm

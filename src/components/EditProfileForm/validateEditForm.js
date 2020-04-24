const validateEditForm = ((profile)=>{
  let errors = {}

  if(!profile.name){
    errors.name = 'Please do not leave this blank'
  }else if (profile.name.length < 3) {
    errors.name ='Name must be longer than 2 characters'
  }else if (profile.name.length > 15) {
    errors.name ="Name must be shorter than 15 characters"
  }

  if(!profile.age){
    errors.age = 'Please do not leave this blank'
  }else if (profile.age <= 18) {
    errors.age = 'You must be over 18 to have a profile'
  }

  return errors
})

export default validateEditForm

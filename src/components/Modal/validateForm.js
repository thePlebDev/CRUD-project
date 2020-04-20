export default function validate(values) {
  let errors = {}
  //name
  //Age
  //height
  // we dont want any of then to be blank

  if(!values.name){
    errors.name = 'Please enter your name';
  } else if(values.name >= 2){
    errors.name = 'Please enter a name that is longer than 2 characters'
  }

  if(!values.age){
    errors.age = 'Please enter your age';
  }else if(values.age <= 18){
    errors.age = "You must be older than 18 to add a profile"
  }



  return errors
}

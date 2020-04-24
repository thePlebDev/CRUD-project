

const next = (id,profileData,setCarousel)=>{
  // want this function to return a object that is the nessisary data needed from the app profile data
  //profileData is the whole of the profiles
  let incrementingID = id +1
  const result = profileData.filter(profile => incrementingID === profile.id)

  if(result.length === 0){
    setCarousel(profileData[0])
  }else{
    setCarousel(...result)
  }
}

const back = (id, profileData,setCarousel)=>{
  let decrementingId = id - 1
  const result = profileData.filter(profile => decrementingId === profile.id)
  let end = profileData.length - 1
  if(result.length === 0){
    setCarousel(profileData[end])
  }else{
    setCarousel(...result)
  }
}


export {next, back}

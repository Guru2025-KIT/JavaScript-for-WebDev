function AppTime(){
  let time=new Date();

  return(
    <p className="time">Current Time is: {time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
  )
}

export default AppTime;
const ShowStatus=()=>{
    let status='Loaded';

    let statusNote;

    switch(status){
      case "loading":
        statusNote=<p>Loading Your Profile</p>;
        break;

      case "Loaded":
        statusNote=<p>Loaded Your Profile</p>;
        break;

      default:
        statusNote=<p>Error Occured!</p>
    }

    return(
      <>
        <h5>Here Is Your Profile Details:</h5>
        <h6>{statusNote}</h6>
        
      </>
    )
}

export default ShowStatus;
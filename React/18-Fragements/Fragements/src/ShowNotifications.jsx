const ShowNotifications = () => {
  let isNotification = false;
  
  const LoginStatus = "Logged in"; 

  const status = isNotification ? "You have New Notifications" : "You Dont have any Notifications";

  return (
    <>
      <p>Your Notification Status:</p>
      <p>{status}</p>
      
      {/* Optimized: Changed from a ternary operator with an empty string "" to a simple && operator */}
      <p>{isNotification && "Notification Reminder"}</p>
      
      {/* This will now display beautifully on your screen! */}
      <p>{LoginStatus === "Logged in" && "You Are Logged in"}</p>
    </>
  );
};

export default ShowNotifications;

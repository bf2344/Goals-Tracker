import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const {userData, setUserData} = useState({
    name: "",
    email: "",
    emailVerified: false
  })

  console.log(isAuthenticated)
  console.log(user)

  // useEffect(()=>{
  //   // setUserData({
  //   //   name: user.name,
  //   //   email: user.email,
  //   //   emailVerified: user.emailVerified
  //   // })
  //     fetch('/api/user/add', {
  //       method: 'POST',
  //       body: JSON.stringify(userData),
  //       headers: { 
  //         "Content-type": "application/json"
  //     } 
  //     })
  //       .then(res => res.json())
  //       .then(data => console.log(data))
  //       .catch(err => console.log(err))
  // }, [])




  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
import React from 'react'
import { Button } from 'reactstrap'


export default function Admin() {
    const handleRedirect = () => {
      localStorage.setItem("login", false);
    //   localStorage.removeItem("login");
      window.location.replace("/auth/login");
    };
 const profile = JSON.parse(localStorage.getItem("profile"));
    console.log(profile)

   return(
       <div>
           <h1>Welcome, {profile.username}</h1>
           <Button onClick={handleRedirect}>
               Logout
           </Button>
       </div>
   )
}

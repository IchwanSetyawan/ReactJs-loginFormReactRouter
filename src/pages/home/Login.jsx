import React, {useState} from 'react'
import {Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from 'react-router-dom';


export default function Login() {
  // const [username, setUsername] = useState('');
  const [email, setEmail] =  useState('');
  const [password, setPassword] = useState("");

     const handleRedirect = (e) => {                 
       e.preventDefault();
      
        const profile = {          
          email: email,
          pass: password

        }        
      //  const decodeString = JSON.stringify(profile)
      let db = JSON.parse(localStorage.getItem("profile"));
      console.log(db)
      
      if(profile.email === db.email || profile.email === db.username && db.pass === profile.pass){
        localStorage.setItem("login", true);
         window.location.replace("/"); //admin
      }else{
        alert('email atau password salah')
      }
      };

    const onChangeemail = (e) =>{      
      const value = e.target.value;    
      setEmail(value)
    }

    const onChangePassword = (e) => {
      const value = e.target.value;      
      setPassword(value);
    }

     return (
       <div style={{ margin: "50px 0px" }}>
         <Container>
           <div className="row justify-content-center">
             <div className="col-md-6">
               <div className="card p-4">
                 <div className="card-body">
                   <Form>
                     <FormGroup>
                       <Label for="exampleEmail">Email</Label>
                       <Input
                         type="text"
                         name="text"
                         placeholder="email"
                         value={email}
                         onChange={onChangeemail}
                       />
                     </FormGroup>
                     <FormGroup>
                       <Label for="examplePassword">Password</Label>
                       <Input
                         type="password"
                         name="password"
                         placeholder="password"
                         value={password}
                         onChange={onChangePassword}
                       />
                     </FormGroup>
                     <Button
                       onClick={handleRedirect}
                       type="submit"
                       class="btn btn-primary btn-lg btn-block"
                     >
                       Login
                     </Button>

                     <p>
                       Belum punya akun? <Link to="/auth/daftar">Daftar</Link>
                     </p>
                   </Form>
                 </div>
               </div>
             </div>
           </div>
         </Container>
       </div>
     );
  
}

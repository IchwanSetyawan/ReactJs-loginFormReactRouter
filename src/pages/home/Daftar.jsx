import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  

  const handleRedirect = (e) => {           
      e.preventDefault();
    const profile = {
      username: username,   
      email: email,
      pass: password
    };

    alert('akun anda berhasil dibuat')
    localStorage.setItem("profile", JSON.stringify(profile))
    window.location.replace("/auth/login");
  };
  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
    
  const onSubmitDaftar =()=>{

  }

  return (
    <div style={{ margin: "50px 0px" }}>
      <Container>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4">
              <div className="card-body">
                <Form onSubmit={onSubmitDaftar}>
                  <FormGroup>
                    <Label for="exampleUsername">Username</Label>
                    <Input
                      type="text"
                      name="text"
                      placeholder="username"
                      value={username}
                      onChange={onChangeUsername}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="text"
                      placeholder="email"
                      value={email}
                      onChange={onChangeEmail}
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
                    Daftar
                  </Button>

                  <p>
                    Sudah punya akun? <Link to="/auth/login">Login</Link>
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


import React from 'react'
import { Button, Container } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../pages/home/Home';
import About from "../pages/home/About";
import Header from './Header';
import Login from "../pages/home/Login";
import Daftar from '../pages/home/Daftar';

export default function LayoutHome() {
    return (
      <Container>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/auth/login" exact>
              <Login />
            </Route>
            <Route path="/auth/daftar" exact>
              <Daftar />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/about/:nama" exact>
              <About />
            </Route>
          </Switch>
        </Router>
      </Container>
    );
}

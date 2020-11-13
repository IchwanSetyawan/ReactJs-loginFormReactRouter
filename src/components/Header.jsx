import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,  
  NavbarText,
  Container,
} from "reactstrap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar color="warning" light expand="md" className="pl-4">
        <NavbarBrand href="/">
          <h4> BaganMotor</h4>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/about">About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/about/me">About me</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Link to="/auth/login">Login</Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </Container>
  );
}
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//         <Link to="/about/noobee">About noobee</Link>
//       </li>
//       <li>
//         <Link to="/about/me">About me</Link>
//       </li>
//       <li>
//         <Link to="/about/project">About project</Link>
//       </li>
//       <li>
//         <Link to="/auth/login">Login</Link>
//       </li>
//     </ul>
//   );
// }

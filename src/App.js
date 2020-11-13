import {Button, Container} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header'
import LayoutHome from './components/LayoutHome'
import Admin from './pages/admin/Admin'


function App() {
  const isAuth = localStorage.getItem('login');
  if(isAuth === 'true'){
    return <Admin/>
  }else{
    return <LayoutHome />        
  }
}


export default App;

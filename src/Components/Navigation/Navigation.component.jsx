import React, {Component} from 'react';
import Registration from '../Registration/Registration.component';
import Login from '../Login/Login.component';
import Home from '../../pages/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Navigation.style.css'

class Navigation extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router>
            <div className="navWrapper">
                <nav className="navLinks">
                    <ul>
                        <Link to="/"><li><a href="#">Home</a></li></Link>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
                <div className="btnWrapper">
                    <Link to="/signIn"><button className="loginBtn">Login</button></Link>
                    <Link to="/registerIn"><button className="regbtn">Sign up</button></Link>
                </div>
                </div>
                <Switch>
                    <Route path="/registerIn" component={Registration}></Route>
                    <Route path='/signIn' component={Login}></Route>
                    <Route exact path='/' component={Home}></Route>
                </Switch>
            </Router>
        )
    }
}

export default Navigation;
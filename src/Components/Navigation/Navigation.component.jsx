import React, {Component} from 'react';
import Registration from '../Registration/Registration.component';
import Login from '../Login/Login.component';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './Navigation.style.css'

class Navigation extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router>
            <div className="navWrapper">
                <div className="btnWrapper">
                    <Link to="/signIn"><button className="loginBtn">Login</button></Link>
                    <Link to="/registerIn"><button className="regbtn">Sign up</button></Link>
                </div>
                </div>
                <Route exact path="/registerIn" component={Registration}></Route>
                <Route path='/signIn' component={Login}></Route>
            </Router>
        )
    }
}

export default Navigation;
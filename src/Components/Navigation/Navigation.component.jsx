import React from 'react';
import { connect } from 'react-redux';

import Registration from '../Registration/Registration.component';
import Login from '../Login/Login.component';
import Home from '../../pages/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Navigation.style.css'

const Navigation = ({ currentUser }) => (
            <Router>
            <div className="navWrapper">
                <nav className="navLinks">
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/">About</Link>
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
 

//function that allows us to access the state
//and state is our root reducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Navigation);
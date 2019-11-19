import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../redux/user/user.actions';


class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
        }
    }   

    validateForm = () => {
        const { username, password } = this.state
        return username.length > 0 && password.length > 0;
    }

    handleSubmit = e => {
        e.preventDefault();
         const { username, password } = this.state;
        // try {
        //     //slanje parametara

        // } catch (error) {
        //     console.log(error);
        // }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className="form-wrapper">
                <h1>Log In</h1>
                <form>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            className="" 
                            placeholder="Username..."
                            name="username"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="password">
                        <label htmlFor="password">Username</label>
                        <input 
                            type="password" 
                            className="" 
                            placeholder="Password..."
                            name="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="submitBtn">
                        <button type="submit" disabled={ !this.validateForm() }>Log in</button>
                        <Link to="/registerIn"><small>Create an account</small></Link>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
    //dispatch is way for redux to know that
    //whatever we are passing to him is going to be
    //action object that we gonna pass to every reducer
})


export default connect(null,mapDispatchToProps)(Login);
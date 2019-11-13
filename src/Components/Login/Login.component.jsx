import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }   

    handleSubmit = e => {
        e.preventDefault();

        const { username, password } = this.state;

        try {
            //slanje parametara
        } catch (error) {
            console.log(error);
        }
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
                        <button type="submit">Register In</button>
                        <Link to="/registerIn"><small>Create an account</small></Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
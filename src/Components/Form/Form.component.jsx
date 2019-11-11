import React, {Component} from 'react';

import './Form.style.css';


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })

    }

    render() {
        return (
        <div className="form-wrapper">
          <h1>Registration</h1>
          <form onSubmit={this.handleSubmit}>
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

              <div className="email">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    className="" 
                    placeholder="Email..."
                    name="email"
                    onChange={this.handleChange}
                        />
              </div>

              <div className="password">
                  <label htmlFor="password">Password</label>
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
                    <small>Already Have an Account?</small>
              </div>
          </form>
      </div>
        );
    }
}


export default Form;

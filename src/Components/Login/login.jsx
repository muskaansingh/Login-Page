import React, { Component } from 'react'
import LoginImage from '../../images/login.svg'
import './style.scss';

class login extends Component {
    
    render() {
        return (
          <fieldset className="fieldset">
          <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
              <div className="image">
                <img src={LoginImage}/>
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" placeholder="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="password" />
                </div>
                <p className="forgot-password">Forgot Password?</p>
              </div>
            </div>
            <div className="footer">
              <button type="button" className="btn">
                Login
              </button>
            </div>
          </div>
        </fieldset>
        );
      }
    }
export default login;

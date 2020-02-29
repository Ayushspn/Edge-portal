import React from 'react';
import classes from './Login.module.scss';
import loginImage from '../../assets/login-image.jpg';
const Login = () => {
    return (
        <div>
            <img src = {loginImage} className = {classes.loginImageContainer}/>
            <div>
                <form className={classes.loginForm}>
                    <div className={classes.loginFormHeading}>
                        Login Form
            </div>
                    <label>User ID</label>
                    <input type='text' />
                    <label>Password</label>
                    <input type='password' />
                    <div className={classes.btnGroup}>
                        <input type='submit' value='Login' />
                        <input type='button' value='Cancel' />
                    </div>
                </form>
            </div>
            </div>
       
    )
}

export default Login;

import React, {useState} from 'react';
import classes from './Login.module.scss';
import {connect} from 'react-redux';
import loginImage from '../../assets/login-image.jpg';
import {asyncLoginActions} from '../../redux/login/login.action.creatos';
const Login = ({setLoginDetails}) => {
const [userId, setUserId] = useState('');
const [userPassword, setUserPassword] = useState('');

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        const loginUserObj = {
            email : userId,
            password : userPassword
        }
        setLoginDetails(loginUserObj);
    }
    return (
        <div>
            <img src={loginImage} className={classes.loginImageContainer} />
            <div>
                <form className={classes.loginForm} onSubmit={(event) => onSubmitFormHandler(event)}>
                    <div className={classes.loginFormHeading}>
                        Login Form
            </div>
                    <label>User ID</label>
                    <input type='text' value = {userId} onChange={(event) => setUserId(event.target.value)}/>
                    <label>Password</label>
                    <input type='password'  value = {userPassword} onChange={(event) => setUserPassword(event.target.value)}/>/>
                    <div className={classes.btnGroup}>
                        <input type='submit' value='Login' />
                        <input type='button' value='Cancel' />
                    </div>
                </form>
            </div>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginDetails : (loginDetails) => dispatch(asyncLoginActions(loginDetails))
    }
}

export default connect(null, mapDispatchToProps)(Login);

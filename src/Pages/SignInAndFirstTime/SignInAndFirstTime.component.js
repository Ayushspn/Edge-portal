import React from 'react';

import Input from '../../Components/UI/Input/Input.component';
import Button from '../../Components/UI/Button/Button.component';

import { connect } from 'react-redux';
import {asyncLoginActions} from '../../redux/login/login.action.creatos'

class SignIn extends React.Component {
    state = {
        userName: ''
    }

    onInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })

    }

    onSubmitSignInForm = (event) => {
        event.preventDefault();
        const { userName } = this.state;
        if ((userName && userName.length > 0)) {
            const loginDetails = {
                userName
            }
            console.log(loginDetails);
            this.props.loginFirstTime(loginDetails);
        }
        
    }

    onCancelClickHandler = () => {
        this.setState({
            userName: ''
        }, () => {
            console.log(this.state);
        })
    }
    render() {
        const { userName } = this.state;
        return (
            <form onSubmit={(event) => this.onSubmitSignInForm(event)}>
                <div>
                    <Input type="text"
                        value={userName} name='userName'
                        setInputValue={(event) => this.onInputChange(event)}
                        label='User Name'
                    />
                </div>
                {/* <div>
                    <Input type="password"
                        value={userPassword}
                        name='userPassword'
                        setInputValue={(event) => this.onInputChange(event)}
                        label='Password'
                    />
                </div> */}
                <Button type='submit'>Login</Button>
                <Button type='button' onCancelClick={() => this.onCancelClickHandler()}>Cancel</Button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginFirstTime: (loginDetails) => {
            dispatch(asyncLoginActions(loginDetails))
        }
    }
}

export default connect(null, mapDispatchToProps)(SignIn);
import React from 'react';
import Input from '../../Components/UI/Input/Input.component';
import Button from '../../Components/UI/Button/Button.component';
class FirstTimeLogin extends React.Component {
    state = {
        userName: ''
    }
    onInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })

    }
    onSubmitFirstForm = (event) => {
        event.preventDefault();
    }
    render() {
        const { userName } = this.state;
        return (
            <form onSubmit={(event) => this.onSubmitFirstForm(event)}>
                <h2>Form Fisrt Time Login</h2>
                <Input type="text"
                    value={userName} name='userName'
                    setInputValue={(event) => this.onInputChange(event)}
                    label='User Name'
                />
                <div>
                    <Button type='submit' on>Reset Password</Button>
                </div>
            </form>
        )
    }

}

export default FirstTimeLogin;
import { LOGIN_USER } from './login.action.types';

export const  asyncLoginActions = (loginDetails)  => {
    return dispatch => {
        
        dispatch(loginActions(loginDetails));}

}

export  const loginActions = (loginDetails) => {
    return {
        type: LOGIN_USER,
        payload: loginDetails
    }
}


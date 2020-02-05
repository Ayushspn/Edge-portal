import {LOGIN_USER} from './login.action.types'

const INITIAL_STATE = {
    userName: ''
}

const loginReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case LOGIN_USER : {
            return {
                state
            }
        }

        default : {
            return state
        }
    }
}


export default loginReducer;

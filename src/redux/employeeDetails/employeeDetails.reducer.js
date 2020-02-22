import {GET_EMPLOYEE_DETAILS} from './employeeDetails.action.types';

const INITIAL_STATE = {
    employeeDetails: {}
}

const employeeDetailsReducer = (state = INITIAL_STATE,action) => {
    
    switch(action.type){
        case GET_EMPLOYEE_DETAILS : {
            return {
                ...state, 
                employeeDetails : action.payload
            }
        }

        default : {
            return state
        }
    }
}


export default employeeDetailsReducer;

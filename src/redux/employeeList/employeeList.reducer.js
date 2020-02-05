import {GET_EMPLOYEE_LIST} from './employeList.action.types';

const INITIAL_STATE = {
    employeeList: []
}

const employeeListReducer = (state = INITIAL_STATE,action) => {
    
    switch(action.type){
       
        case GET_EMPLOYEE_LIST : {
            console.log(action)
            return {
                ...state, 
                employeeList : [...action.payload]
            }
        }

        default : {
            return state
        }
    }
}


export default employeeListReducer;

import { FILTER_EMPLOYEE_DETAILS} from './employeeFilter.action.types';
import { FILTER_EMPLOYEE_JOINING_DATE} from './employeeFilter.action.types';
const INITIAL_STATE = {
    employeeFilterKeyWord: 0, 
    emplyeeFilterDateRange : {}
}

const employeeFilterReducer = (state = INITIAL_STATE,action) => {
    
    switch(action.type){
        case FILTER_EMPLOYEE_DETAILS : {
            return {
                ...state, 
                employeeFilterKeyWord : action.payload
            }
        }

        case FILTER_EMPLOYEE_JOINING_DATE : {
            return {
                ...state, 
                emplyeeFilterDateRange : action.payload
            }
        }

        default : {
            return state
        }
    }
}


export default employeeFilterReducer;

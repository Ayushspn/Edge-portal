import { SEARCH_EMPLOYEE } from './searchEmployee.action.types';
import {store as store} from '../../index';
const INITIAL_STATE = {
    searchedEmployee : []
}

const searchEmployeeReducer = (state = INITIAL_STATE,action) => {
    
    switch(action.type){
        case SEARCH_EMPLOYEE : {
            return {
                ...state, 
                employeeKeyWordSearch : action.payload
            }
        }

        default : {
            return state
        }
    }
}


export default searchEmployeeReducer;

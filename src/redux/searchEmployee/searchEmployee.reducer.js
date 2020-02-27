import { SEARCH_EMPLOYEE } from './searchEmployee.action.types';
const INITIAL_STATE = {
    searchedEmployee : ''
}

const searchEmployeeReducer = (state = INITIAL_STATE,action) => {
    
    switch(action.type){
        case SEARCH_EMPLOYEE : {
            return {
                ...state, 
                searchedEmployee : action.payload
            }
        }

        default : {
            return state
        }
    }
}


export default searchEmployeeReducer;

import {SET_EMP_FORM_DETAIL} from './form.action.types';

const INITIAL_STATE = {
    employeeFormDetail: {}
}

const employeeDetailsReducer = (state = INITIAL_STATE,action) => {
    
    switch(action.type){
        case SET_EMP_FORM_DETAIL : {
            return {
                ...state, 
                employeeFormDetail : action.payload
            }
        }

        default : {
            return state
        }
    }
}


export default employeeDetailsReducer;

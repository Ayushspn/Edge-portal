import {combineReducers} from 'redux';

import loginReducer from '../redux/login/login.reducer';
import  employeeListReducer from '../redux/employeeList/employeeList.reducer';
import employeeDetailsReducer from '../redux/employeeDetails/employeeDetails.reducer'

const rootReducer = combineReducers({
    login : loginReducer,
    emplList : employeeListReducer, 
    empReducer : employeeDetailsReducer
})

export default rootReducer;
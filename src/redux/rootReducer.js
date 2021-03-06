import {combineReducers} from 'redux';

import loginReducer from '../redux/login/login.reducer';
import  employeeListReducer from '../redux/employeeList/employeeList.reducer';
import employeeDetailsReducer from '../redux/employeeDetails/employeeDetails.reducer'
import searchEmployeeReducer from '../redux/searchEmployee/searchEmployee.reducer';
import employeeFilterReducer from '../redux/employeeFilter/employeeFilter.reducer';
import handleModal from '../redux/modal/modal.reducer';
const rootReducer = combineReducers({
    login : loginReducer,
    emplList : employeeListReducer, 
    empReducer : employeeDetailsReducer,
    searchEmployee : searchEmployeeReducer,
    employeFilter : employeeFilterReducer,
    handleModal
})

export default rootReducer;
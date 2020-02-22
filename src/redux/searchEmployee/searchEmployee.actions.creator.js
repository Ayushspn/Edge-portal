import { SEARCH_EMPLOYEE } from './searchEmployee.action.types';

export const dispatchEmployeeDetails = (keyWord) => {
    return (dispatch) => {
        dispatch(searchEmployee(keyWord))
}
}
export const searchEmployee = (searchEmployee) => {
    return {
        type: SEARCH_EMPLOYEE,
        payload: searchEmployee
    }
}
import { FILTER_EMPLOYEE_DETAILS} from './employeeFilter.action.types';
import {FILTER_EMPLOYEE_JOINING_DATE} from './employeeFilter.action.types';
export const employeeFilter = (filterRange) => {
    return {
        type: FILTER_EMPLOYEE_DETAILS,
        payload: filterRange
    }
}

export const employeeFilterByDate = (filterDateRange) => {
    return {
        type: FILTER_EMPLOYEE_JOINING_DATE,
        payload: filterDateRange
    }
}
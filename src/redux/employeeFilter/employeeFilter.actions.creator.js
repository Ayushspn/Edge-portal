import { FILTER_EMPLOYEE_DETAILS} from './employeeFilter.action.types';
export const employeeFilter = (filterRange) => {
    return {
        type: FILTER_EMPLOYEE_DETAILS,
        payload: filterRange
    }
}
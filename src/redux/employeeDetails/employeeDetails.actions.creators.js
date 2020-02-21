import { GET_EMPLOYEE_DETAILS } from './employeeDetails.action.types';
import firebaseDb from '../../firebase';

export const asyncEmployeeDetails = (empID) => {
    return dispatch => {
        const employeeDetails = firebaseDb.collection('users').doc(empID);

        employeeDetails.get().then(function (doc) {
            if (doc.exists) {
                dispatch(employeeDetailsAction(doc.data()))
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }

}


export const employeeDetailsAction = (employeeDetails) => {
    return {
        type: GET_EMPLOYEE_DETAILS,
        payload: employeeDetails
    }
}
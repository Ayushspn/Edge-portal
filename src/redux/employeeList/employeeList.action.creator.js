import {GET_EMPLOYEE_LIST} from './employeList.action.types';
import firebaseDb from '../../firebase';
export const  asyncEmployeeListActions = ()  => {
   
    return dispatch => {
        let employeeList = [];
        firebaseDb.collection("users").get().then((querySnapshot) => {
            querySnapshot.docs.map((doc) =>{
               employeeList.push(doc.data())
            })   
            dispatch(employeeListAction(employeeList));       
        });
        
        
    }

}

export  const employeeListAction = (employeeList) => {
    return {
        type: GET_EMPLOYEE_LIST,
        payload: employeeList
    }
}


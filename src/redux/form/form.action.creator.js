import {SET_EMP_FORM_DETAIL} from './form.action.types';


import firebaseDb from '../../firebase';

export const  asyncSaveEmployeeDetails = (empDetails)  => {
   
    return dispatch => {
        
        firebaseDb.collection('users').doc(empDetails.empCode).set(empDetails)
        .then(function() {
            dispatch(successEmpDataSave('Emp Data save succssfully'));
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        
        
    }

}

export  const successEmpDataSave = (empDetails) => {
    return {
        type: SET_EMP_FORM_DETAIL,
        payload: empDetails
    }
}


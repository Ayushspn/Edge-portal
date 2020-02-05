import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {asyncEmployeeDetails} from '../../redux/employeeDetails/employeeDetails.actions.creators';
const EmployeeDetails = ({match, getEmpDetails, employeeDetails}) => {
    useEffect(() => {
        console.log(match.params.id)
        if(match && match.params){
            getEmpDetails(match.params.id)
           
        }
    }, [])
    
return <div>{employeeDetails.Name} {employeeDetails[' Year of Exp']} {employeeDetails['empCode']}</div>    
}

const mapDispatchToState = ({empReducer: {employeeDetails}}) => {
    return {
        employeeDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEmpDetails : (empId) => dispatch(asyncEmployeeDetails(empId))
    }
}
export default connect(mapDispatchToState, mapDispatchToProps)(EmployeeDetails);
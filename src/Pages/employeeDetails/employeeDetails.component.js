import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import classes from './employee-details.module.scss';

import { asyncEmployeeDetails } from '../../redux/employeeDetails/employeeDetails.actions.creators';
const EmployeeDetails = ({ match, getEmpDetails, employeeDetails, skillSet }) => {

   
    useEffect(() => {
        if (match && match.params) {
            getEmpDetails(match.params.id)
        }
    }, []);



    return <div class={classes.employeeDetails}>
        <div className={classes.backToHome}>
            <Link to='/'>Back To Home</Link>
        </div>
        <div>
            <div className={classes.employeeNameExp}>
                <div className= {classes.empDetail}>
                    <span>Name</span> : <span>{employeeDetails.Name}</span>
                </div>
                <div className= {classes.empDetail}>
                    <span>Emp Code</span> : <span>{employeeDetails['empCode']}</span>

                </div>
            </div>
            <div className={classes.employeeNameExp}>
                <div className= {classes.empDetail}>Emp Exp :{employeeDetails[' Year of Exp']}</div>
                <div className= {classes.empDetail}>Emp Category :{employeeDetails['Category']}
                </div>
            </div>
            <div className={classes.employeeNameExp}>
                <div className= {classes.backToHome}>
                    <h4 className= {classes.empDetail}>Sub Skill Set</h4>
                <ol>
                    {employeeDetails['skillSet'] && employeeDetails['skillSet'].map((skill) => <li>{skill}</li>)}
                </ol>
                </div>
            </div>
        </div>
    </div >
}

const mapDispatchToState = ({ empReducer: { employeeDetails } }) => {
    return {
        employeeDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEmpDetails: (empId) => dispatch(asyncEmployeeDetails(empId))
    }
}
export default connect(mapDispatchToState, mapDispatchToProps)(EmployeeDetails);
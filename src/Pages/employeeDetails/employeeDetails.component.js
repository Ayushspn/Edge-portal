import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { faAngelDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {faAngelDown} from '@fortawesome/fontawesome-pro-regular/';
import { asyncEmployeeDetails } from '../../redux/employeeDetails/employeeDetails.actions.creators';
const EmployeeDetails = ({ match, getEmpDetails, employeeDetails, skillSet }) => {

    const toggleSkills = () => {
        console.log('clicked');
    }
    useEffect(() => {
        console.log(match.params.id)
        if (match && match.params) {
            getEmpDetails(match.params.id)

        }

    }, []);



    return <div class='employee-details'>
        <div>
            <Link to='/'>Back</Link>
        </div>
        <div>
            <div className='employee-name-exp'>
                <div>
                    Name : {employeeDetails.Name}
                </div>
                <div>
                    Emp Code : {employeeDetails['empCode']}

                </div>
            </div>
            <div>Emp Exp :{employeeDetails[' Year of Exp']}</div>
            <div>Emp Category :{employeeDetails['Category']}
                <span onClick={() => toggleSkills()}>
                    <i class="fa fa-angle-down"></i>
                </span>
            </div>
            <div>
                Sub Skill Set
                <ol>
                    {employeeDetails['skillSet'] && employeeDetails['skillSet'].map((skill) => <li>{skill}</li>)}
                </ol>
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
import React, {useState} from 'react';
import { connect } from 'react-redux';
import {dispatchEmployeeDetails} from '../../redux/searchEmployee/searchEmployee.actions.creator';
const EmployeeSearch = ({searchKeyWord}) => {
    const [nameValue, setNameValue] = useState('');
    const searchEmployeeByName = (event) => {
        setNameValue(event.target.value)   ;
    }
    return (
        <>
            <input type = 'search' placeholder ='search for employee' onChange = {searchEmployeeByName}/>
            <button onClick = {() =>searchKeyWord(nameValue)}>Okay</button>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchKeyWord : (keyWord) => dispatch(dispatchEmployeeDetails(keyWord))
    }
}
export default connect(null, mapDispatchToProps)(EmployeeSearch);
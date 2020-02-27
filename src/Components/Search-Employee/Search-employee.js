import React, {useState} from 'react';
import { connect } from 'react-redux';
import {dispatchEmployeeDetails} from '../../redux/searchEmployee/searchEmployee.actions.creator';
const EmployeeSearch = ({searchKeyWord}) => {
    const searchEmployeeByName = (event) => {
        searchKeyWord(event.target.value)   ;
    }
    return (
        <>
            <input type = 'search' placeholder ='search for employee' onKeyUp = {searchEmployeeByName}/>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchKeyWord : (keyWord) => dispatch(dispatchEmployeeDetails(keyWord))
    }
}
export default connect(null, mapDispatchToProps)(EmployeeSearch);
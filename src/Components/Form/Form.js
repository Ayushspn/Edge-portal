import React, { useState } from 'react';
import {connect} from 'react-redux';
import DatePicker from "react-datepicker";
import classes from './Form.module.scss';
import {asyncSaveEmployeeDetails} from '../../redux/form/form.action.creator';
const Form = ({saveAddEmpForm}) => {
    const [Name, setNameValue] =  useState('');
    const [empCode, setEmpCode] =  useState('');
    const [Category, setCategory] =  useState('');
    const [dateOfJoining, setdateOfJoining] = useState(new Date());
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formDetails = {
            Name, 
            empCode, 
            Category, 
            dateOfJoining
        }
        saveAddEmpForm(formDetails);
    }

    const onHandleSelectCatgry = (event) => {
        setCategory(event.target.value);
    }
    return (
        <div className={classes.formContainer}>
            <p className={classes.formHeading}>Add Employee Details</p>
            <form className={classes.addEmployeeForm} onSubmit= {(event) =>handleFormSubmit(event)}>
                <label>Name :</label>
                <input type='text' onChange = {(event) => setNameValue(event.target.value)} name ='name' value ={Name} ></input>
                <label>Emp Code</label>
                <input type='text' value = {empCode} onChange = {(event) => setEmpCode(event.target.value)}></input>
                <label>Category</label>
                <select onChange = {(event) => onHandleSelectCatgry(event)}>
                    <option value ='Select'>select</option>
                    <option value ='UI'>UI</option>
                    <option value ='UX'>UX</option>
                </select>
                <label>Joining Date</label>
                <DatePicker 
                onChange={(date) => setdateOfJoining(date)}
                selected={dateOfJoining}
                />
                <div className={classes.btnGroup}>
                    <button type='submit'>Submit Details</button>
                    <button type='button'>Cancel</button>
                </div>
            </form>
        </div>

    )
}
const mapDispatchToProps = dispatch => {
    return {
        saveAddEmpForm : (empData) => dispatch(asyncSaveEmployeeDetails(empData))
    }
}

export default connect(null, mapDispatchToProps)(Form);

import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import classes from './Form.module.scss';
const Form = () => {
    const [nameValue, setNameValue] =  useState('');
    const [empCode, setEmpCode] =  useState('');
    const [category, setCategory] =  useState('');
    const handleFormSubmit = (event) => {
        console.log(event);
    }

    const onHandleSelectCatgry = (event) => {
        setCategory(event.target.value);
    }
    return (
        <div className={classes.formContainer}>
            <p className={classes.formHeading}>Add Employee Details</p>
            <form className={classes.addEmployeeForm} onSubmit= {(event) =>handleFormSubmit(event)}>
                <label>Name :</label>
                <input type='text' onChange = {(event) => setNameValue(event.target.value)} name ='name' value ={nameValue} ></input>
                <label>Emp Code</label>
                <input type='text' value = {empCode} onChange = {(event) => setEmpCode(event.target.value)}></input>
                <label>Category</label>
                <select onChange = {(event) => onHandleSelectCatgry(event)}>
                    <option value ='Select'>select</option>
                    <option value ='UI'>UI</option>
                    <option value ='UX'>UX</option>
                </select>
                <label>Joining Date</label>
                <DatePicker />
                <div className={classes.btnGroup}>
                    <button type='submit'>Submit Details</button>
                    <button type='button'>Cancel</button>
                </div>
            </form>
        </div>

    )
}

export default Form;

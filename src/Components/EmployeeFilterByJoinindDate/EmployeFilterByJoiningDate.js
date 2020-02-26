import React, { useState } from 'react'
import clasess from './EmployeeFilterByJoiningDate.module.scss';
import {connect} from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {employeeFilterByDate} from '../../redux/employeeFilter/employeeFilter.actions.creator';
const EmployeFilterByJoiningDate = ({setDate}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const setStartEndDate  = () => {
        setDate({
            startDate,
            endDate
        })
    }

    return (
        <div className={clasess.dateContainer}>
            <div>
                <span>
                    From
            </span>
                <DatePicker
                    onChange={(date) => setStartDate(date)}
                    selected={startDate}
                ></DatePicker>
            </div>

            <div>
                <span>
                    To
            </span>
                <DatePicker
                    onChange={(date) => setEndDate(date)}
                    selected={endDate}
                ></DatePicker>
            </div>
            <button onClick = {setStartEndDate}>Okay</button>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return{
        setDate : (date) => dispatch(employeeFilterByDate(date))
    }
}

export default connect(null, mapDispatchToProps)(EmployeFilterByJoiningDate);

import React, { useState } from 'react'
import clasess from './EmployeeFilterByJoiningDate.module.scss';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
const EmployeFilterByJoiningDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

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
            <button>Okay</button>
        </div>
    )
}

export default EmployeFilterByJoiningDate;

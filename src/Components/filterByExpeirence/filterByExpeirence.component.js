import React, { useState } from 'react';
import { connect } from 'react-redux';
import { employeeFilter } from '../../redux/employeeFilter/employeeFilter.actions.creator'
const FilterByExperoence = ({ filterByExp }) => {

    const [rangeValue, setRangeValue] = useState('0')
    const filterEmployeeByExp = (event) => {
        setRangeValue(event.target.value)
        filterByExp(event.target.value);
    }
    return (<input type='range' min='0' max='20'
        value={rangeValue}
        step="2"
        onChange={filterEmployeeByExp} />)
}

const mapStateToProps = dispatch => {
    return {
        filterByExp: (range) => dispatch(employeeFilter(range))
    }
}
export default connect(null, mapStateToProps)(FilterByExperoence);
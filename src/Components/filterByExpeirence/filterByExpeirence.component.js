import React, { useState } from 'react';
import { connect } from 'react-redux';
import { employeeFilter } from '../../redux/employeeFilter/employeeFilter.actions.creator';
import clasess from './filterByExperience.module.scss';
const FilterByExperoence = ({ filterByExp }) => {

    const [rangeValue, setRangeValue] = useState('0')
    const filterEmployeeByExp = (event) => {
        setRangeValue(event.target.value)
        filterByExp(event.target.value);
    }
    return (
    <div>
        <span>Filter By Exp</span>
    <input type='range' min='0' max='20'
        value={rangeValue}
        className={clasess.slider}
        step="2"
        onChange={filterEmployeeByExp} />
        <span>Range : 0 - {rangeValue === '0' ? 20 : rangeValue}</span>
    </div>
        )
}

const mapStateToProps = dispatch => {
    return {
        filterByExp: (range) => dispatch(employeeFilter(range))
    }
}
export default connect(null, mapStateToProps)(FilterByExperoence);
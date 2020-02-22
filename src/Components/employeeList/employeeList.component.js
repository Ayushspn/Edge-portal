import React, { useEffect, useState } from 'react';
import { asyncEmployeeListActions } from '../../redux/employeeList/employeeList.action.creator'
import { connect } from 'react-redux';
import EmployeeSearch from '../Search-Employee/Search-employee';
import DataTable from 'react-data-table-component';
import FilterByExperoence from '../filterByExpeirence/filterByExpeirence.component';
import classes from './employeeList.scss';
const EmployeeList = ({ getEmployeeList, employeeList, history, employeeKeyWordSearch }) => {

    const [newEmployeeList, setnewEmployeeList] = useState([]);
    const handleCellClick = (row) => {
        history.push(`employee-details/${row.empCode}`)
    };




    //Joining Date
    let loading = true;
    const columns = [
        {
            name: 'Name',
            selector: 'Name',
            sortable: true,
        },
        {
            name: 'EmpID',
            selector: 'empCode',
            sortable: true
        },

        {
            name: 'Year of Experience',
            selector: 'yearOfExp',
            sortable: true
        },

        {
            name: 'Category',
            selector: 'Category',
            sortable: true
        },

        {
            name: 'Date of Joining',
            selector: 'joiningDate',
            sortable: true
        },

        {
            name: 'Action',
            sortable: false,
            cell: cellInfo => (
                <button className="scenarioDetailLink" onClick={() => handleCellClick(cellInfo)}>
                    view Details
                     </button>
            )
        },
    ];
    useEffect(() => {
        getEmployeeList();
        const setFilterEmployeeList = [];
        employeeList && employeeList.length > 0 ? loading = false : loading = true;
        const newEmployeeList = employeeList && employeeList.map((employee) => {
            const joiningDate = new Date(employee.dateOfJoining.seconds * 1000).getFullYear();
            const currentDate = new Date().getFullYear();
            const yearOfExp = Math.abs((currentDate - joiningDate));
            const newEmployee = {
                ...employee,
                joiningDate: new Date(employee.dateOfJoining.seconds * 1000).toDateString(),
                yearOfExp
            }
            if (employeeKeyWordSearch && employeeKeyWordSearch.length > 0) {
                if (newEmployee.Name.toUpperCase().includes(employeeKeyWordSearch.toUpperCase())) {
                    setFilterEmployeeList.push(newEmployee);
                }
            }
            else {
                return newEmployee;
            }

        })
        if (employeeKeyWordSearch && employeeKeyWordSearch.length > 0) {
            setnewEmployeeList(setFilterEmployeeList)
        }
        else {
            setnewEmployeeList(newEmployeeList)
        }

    }, [employeeList.length, employeeKeyWordSearch])

    return (
        <div className ={classes.mainContainer}>
            <div>
                <FilterByExperoence/>
            </div>
            <div>
                <EmployeeSearch />
                <DataTable
                    columns={columns}
                    data={newEmployeeList}
                    progressPending={false}
                />
            </div>
        </div>
    )
}
const mapDispatchToState = ({ emplList: { employeeList }, searchEmployee: { employeeKeyWordSearch } }) => {
    return {
        employeeList,
        employeeKeyWordSearch
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeeList: () => dispatch(asyncEmployeeListActions())
    }

}

export default connect(mapDispatchToState, mapDispatchToProps)(EmployeeList);
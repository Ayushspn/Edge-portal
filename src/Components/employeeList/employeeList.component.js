import React, { useEffect, useState } from 'react';
import { asyncEmployeeListActions } from '../../redux/employeeList/employeeList.action.creator'
import { connect } from 'react-redux';
import EmployeeSearch from '../Search-Employee/Search-employee';
import DataTable from 'react-data-table-component';
import FilterByExperoence from '../filterByExpeirence/filterByExpeirence.component';
import classes from './employeeList.scss';
const EmployeeList = ({ getEmployeeList, employeeList,
    history, searchedEmployee, employeeFilterKeyWord }) => {

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
        const setSerachEmployeList = [];
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
            if (employeeFilterKeyWord  > 0) {
                if (newEmployee.yearOfExp < employeeFilterKeyWord) {
                    setFilterEmployeeList.push(newEmployee);
                }
            }
            if (searchedEmployee && searchedEmployee.length > 0) {
                if (newEmployee.Name.toUpperCase().includes(searchedEmployee.toUpperCase())) {
                    setSerachEmployeList.push(newEmployee);
                }
            }

            else {
                return newEmployee;
            }


        })
        if(searchedEmployee && searchedEmployee.length > 0){
            setnewEmployeeList(setSerachEmployeList)  
        }
        else if ( employeeFilterKeyWord > 0) {
            setnewEmployeeList(setFilterEmployeeList)
        }
        else {
            setnewEmployeeList(newEmployeeList)
        }

    }, [employeeList.length, searchedEmployee, employeeFilterKeyWord])

    return (
        <div className={classes.mainContainer}>
            <div>
                <FilterByExperoence />
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
const mapDispatchToState = ({ emplList:
    { employeeList }, searchEmployee:
    { searchedEmployee },
    employeFilter: { employeeFilterKeyWord }
}) => {
    return {
        employeeList,
        searchedEmployee,
        employeeFilterKeyWord
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeeList: () => dispatch(asyncEmployeeListActions())
    }

}

export default connect(mapDispatchToState, mapDispatchToProps)(EmployeeList);
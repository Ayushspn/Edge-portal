import React, { useEffect, useState } from 'react';
import { asyncEmployeeListActions } from '../../redux/employeeList/employeeList.action.creator'
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import FilterByExperoence from '../filterByExpeirence/filterByExpeirence.component';
import classes from './employeeList.module.scss';
import RenderComponent from '../RenderComponent/RenderComponent';

const EmployeeList = ({ getEmployeeList, employeeList,
    history, searchedEmployee, employeeFilterKeyWord, emplyeeFilterDateRange }) => {

    const [newEmployeeList, setnewEmployeeList] = useState([]);
    const [componentType, setcomponentType] = useState(['Search Employee']);

    const handleCellClick = (row) => {
        history.push(`employee-details/${row.empCode}`)
    };
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
                <button className={classes.viewDetailsBtn} onClick={() => handleCellClick(cellInfo)}>
                    view Details
                     </button>
            )
        },
    ];



    useEffect(() => {
        getEmployeeList();
        const setFilterEmployeeList = [];
        const setSerachEmployeList = [];
        const setJoiningFilterList = [];
        const filteredEmpList = [];
        const newEmployeeList = employeeList && employeeList.map((employee) => {
            const joiningDate = new Date(employee.dateOfJoining.seconds * 1000).getFullYear();
            const currentDate = new Date().getFullYear();
            const yearOfExp = Math.abs((currentDate - joiningDate));
            const newEmployee = {
                ...employee,
                joiningDate: new Date(employee.dateOfJoining.seconds * 1000).toDateString(),
                yearOfExp
            }
            
            if (emplyeeFilterDateRange.startDate && emplyeeFilterDateRange.endDate) {
                const endDateParsed = Date.parse(emplyeeFilterDateRange.endDate.toDateString())
                const startDateParsed = Date.parse(emplyeeFilterDateRange.startDate.toDateString())
                const joiningDateparse = Date.parse(newEmployee.joiningDate);
                if (startDateParsed <= joiningDateparse && joiningDateparse <= endDateParsed
                ) {
                    setJoiningFilterList.push(newEmployee);
                    filteredEmpList.push(newEmployee)
                }
            }
            if (employeeFilterKeyWord > 0) {
                if (newEmployee.yearOfExp <= employeeFilterKeyWord  ) {
                    setFilterEmployeeList.push(newEmployee);
                    const getIndex = filteredEmpList.findIndex((filteredEmpListItem) => filteredEmpListItem.empCode ===  newEmployee.empCode);
                    if(getIndex === -1){
                        filteredEmpList.push(newEmployee)
                    }
                }
            }
            if (searchedEmployee && searchedEmployee.length > 0) {
                if (newEmployee.Name.toUpperCase().includes(searchedEmployee.toUpperCase())) {
                    setSerachEmployeList.push(newEmployee);
                    const getIndex = filteredEmpList.findIndex((filteredEmpListItem) => filteredEmpListItem.empCode ===  newEmployee.empCode);
                    if(getIndex === -1){
                        filteredEmpList.push(newEmployee)
                    }
                }
            }
            else {
                return newEmployee;
            }
        })
        if (searchedEmployee && searchedEmployee.length > 0) {
            setnewEmployeeList(setSerachEmployeList)
        }
        else if (employeeFilterKeyWord > 0) {
            setnewEmployeeList(setFilterEmployeeList)
        }
        else {
            setnewEmployeeList(newEmployeeList)
        }


    }, [employeeList.length,
        searchedEmployee,
        employeeFilterKeyWord,
        emplyeeFilterDateRange]);

    const slectFilterMoethod = (event) => {
        setcomponentType(event.target.value);
    }

    return (
        <div className={classes.mainContainer}>
            <div className={classes.filterExp}>
                <FilterByExperoence />
            </div>
            <div className={classes.searchTable}>
                <div className={classes.employeeSearch}>
                    <span>Search By </span>
                    <select className={classes.serachDropDown} onChange={(event) => slectFilterMoethod(event)}>
                        <option value='Search Employee'>Name</option>
                        <option value='Joining Date'>Joining Date</option>
                    </select>
                    <RenderComponent type={componentType} />
                </div>
                <DataTable
                    columns={columns}
                    data={newEmployeeList}
                    progressPending={false}
                    title='Employee Table'
                />
            </div>
        </div>
    )
}
const mapDispatchToState = ({ emplList:
    { employeeList }, searchEmployee:
    { searchedEmployee },
    employeFilter: { employeeFilterKeyWord, emplyeeFilterDateRange }
}) => {
    return {
        employeeList,
        searchedEmployee,
        employeeFilterKeyWord,
        emplyeeFilterDateRange
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeeList: () => dispatch(asyncEmployeeListActions())
    }

}

export default connect(mapDispatchToState, mapDispatchToProps)(EmployeeList);
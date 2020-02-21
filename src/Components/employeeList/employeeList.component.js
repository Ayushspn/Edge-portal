import React, { useEffect, useState } from 'react';
import { asyncEmployeeListActions } from '../../redux/employeeList/employeeList.action.creator'
import { connect } from 'react-redux';
import EmployeeSearch from '../Search-Employee/Search-employee';
import DataTable from 'react-data-table-component';

const EmployeeList = ({ getEmployeeList, employeeList, history }) => {

    const [newEmployeeList, setnewEmployeeList] = useState([]);
    const handleCellClick = (row) => {
        console.log(row);
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
        employeeList && employeeList.length > 0 ? loading = false : loading = true;
        const newEmployeeList = employeeList && employeeList.map((employee) => {
            const joiningDate = new Date(employee.dateOfJoining.seconds * 1000).getFullYear();
            const currentDate =new Date().getFullYear();
           const yearOfExp =  Math.abs((currentDate - joiningDate));
           console.log(yearOfExp)
            const newEmployee = {
                ...employee,
                joiningDate: new Date(employee.dateOfJoining.seconds * 1000).toDateString(),
                yearOfExp
            }
            return newEmployee
        })
        setnewEmployeeList(newEmployeeList)
    }, [employeeList.length])

    return (
        <div>
            <EmployeeSearch/>
            <DataTable
                columns={columns}
                data={newEmployeeList}
                progressPending={false}
            />
        </div>
    )
}
const mapDispatchToState = ({ emplList: { employeeList } }) => {
    return {
        employeeList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeeList: () => dispatch(asyncEmployeeListActions())
    }

}

export default connect(mapDispatchToState, mapDispatchToProps)(EmployeeList);
import React, { useEffect } from 'react';
import {Link } from "react-router-dom";
import { asyncEmployeeListActions } from '../../redux/employeeList/employeeList.action.creator'
import { connect } from 'react-redux';

import DataTable from 'react-data-table-component';

const EmployeeList = ({ getEmployeeList, employeeList, history }) => {

   const  handleCellClick = (row) => {
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
            selector: ' Year of Exp',
            sortable: true
        },

        {
            name: 'Category',
            selector: 'Category',
            sortable: true
        },

        {
            name: 'Action',
            sortable: false,
            cell: cellInfo => (
                <button className="scenarioDetailLink" onClick = {() =>handleCellClick(cellInfo)}>
                    view Details
                     </button>
            )
          },
    ];
    useEffect(() => {
        getEmployeeList();
        employeeList && employeeList.length > 0 ? loading = false : loading = true;
    }, [])

    return (
        <div>
            <DataTable
                
                title="Employee Table"
                columns={columns}
                data={employeeList}
                progressPending = {false}
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
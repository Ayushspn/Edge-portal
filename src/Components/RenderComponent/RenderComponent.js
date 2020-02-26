import React from 'react'
import EmployeFilterByJoiningDate from '../EmployeeFilterByJoinindDate/EmployeFilterByJoiningDate';
import EmployeeSearch from '../Search-Employee/Search-employee';
const RenderComponent = ({type}) => {
    switch(type){
        case 'Joining Date':
        return(<EmployeFilterByJoiningDate/>)
        case 'Search Employee' : 
        return(<EmployeeSearch></EmployeeSearch>)
        default : 
        return(<EmployeeSearch></EmployeeSearch>)
    }
    return (
        <div>
            
        </div>
    )
}

export default RenderComponent;

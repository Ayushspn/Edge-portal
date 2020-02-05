import React from 'react';
import { Route} from "react-router-dom";
import EmployeeDetails from './Pages/employeeDetails/employeeDetails.component';
import EmployeeList from './Components/employeeList/employeeList.component'


import './App.scss';

function App() {
  
  return (
    <div className="App">
      <Route path ='/' exact component = {EmployeeList}/>
      <Route path ='/employee-details/:id' exact component = {EmployeeDetails}/>
      
    </div>
  );
}

export default App;

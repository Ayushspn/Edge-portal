import React from 'react';
import { Route, Switch } from "react-router-dom";
import EmployeeDetails from './Pages/employeeDetails/employeeDetails.component';
import EmployeeList from './Components/employeeList/employeeList.component'
import Header from './Components/Header/Header.component';
import AboutUs from './Pages/AboutUs/AboutUs';
import Team from './Pages/Team/Team';
import Login from './Pages/Login/Login';
import './App.scss';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/employee-list' exact component={EmployeeList} />
        <Route path='/employee-details/:id' component={EmployeeDetails} />
        <Route path='/about-us' e component={AboutUs} />
        <Route path='/team' e component={Team} />
        <Route component={EmployeeList} />
      </Switch>
    </div>
  );
}

export default App;

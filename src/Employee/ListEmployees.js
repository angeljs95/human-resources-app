import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListEmployees() {

    const urlBase= "http://localhost:8080/hr-app/employees";

    const [employees, setEmployees] = useState([]);
   

    useEffect(() => {
        loadEmployees();   
    }, []);

    const loadEmployees = async() => {
        const response= await axios.get(urlBase);
        console.log("Load Employees result:");
        console.log(response.data);
       setEmployees(response.data);
    }

    const deleteEmployee = async(id)=>{
      await axios.delete(`${urlBase}/${id}`)
      loadEmployees();
    }

     
  return (
<div className='container'>

    <div className='container text-center' style={{margin: "30px"}}>
      <h2> Human Resources System</h2>
    </div>

    <table className="table table-striped table-hover table align-middle">
  <thead className='table-dark'>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Employee</th>
      <th scope="col">Dni</th>
      <th scope="col">Department</th>
      <th scope="col">Email</th>
      <th scope="col">Salary</th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
      {// Iteramos el arreglo de employee
      // para darle formato a los numero usamos el modulo de react-number-format
        employees.map((employee, indice)=> (
            <tr key={indice} >
              <th scope="row">{employee.id}</th>
              <td>{employee.name}</td>
              <td>{employee.dni}</td>
              <td>{employee.department}</td>
              <td>{employee.email}</td>
        
              <td><NumericFormat value=  {employee.salary} displayType={'text'} thousandSeparator=','
               prefix={'$'} decimalScale={2} fixedDecimalScale/>
              </td>
              <td className='text-center'>
              <div >
                <Link to={`/update/${employee.id}`} className='btn btn-warning btn-md me-3'> Edit</Link>
                <button onClick={()=> deleteEmployee(employee.id)} className='btn btn-danger btn-md'>Delete</button>
              </div>

              </td>
            </tr>
            ))
        }

  </tbody>
</table>

    </div>
  )
}


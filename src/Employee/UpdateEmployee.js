import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateEmployee() {

    const urlBase= "http://localhost:8080/hr-app/employees";

    let navigate= useNavigate();

    const {id}= useParams();

    const[employee, setEmployee]= useState({
        name: "",
        dni: "",
        deparment: "",
        email: "",
        salary: "",
    })
  
    const {name,dni ,department,email,salary}= employee

  
    useEffect(()=>{
        loadEmployee();
    },[])


const loadEmployee= async () => {
    const response= await axios.get(`${urlBase}/${id}`);
    setEmployee(response.data);
}


   const onInputChange= (e)=>{
// spread operator ...(expandir atributos de nuestro objeto empleado)
// capturamos el evento [e.target.name]: y lo seteamos con el valor : e.target.value
setEmployee({...employee, [e.target.name]: e.target.value })
   }

   const onSubmit= async (e)=> {
    e.preventDefault()
    await axios.put(`${urlBase}/${id}`, employee);
    // redirigimos a inicio
    navigate('/');
   }


  return (

    <div className='container'>
    <div className='container text-center' style={{margin: "30px"}}>
<h2> Edit Employee</h2>
    </div>

<form onSubmit={(e)=> onSubmit(e)} >
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name:</label>
    <input type="text" className="form-control" id="name" name='name' required={true} 
    value={name} onChange={(e)=> onInputChange(e)}  />
  </div>
  <div className="mb-3">
    <label for="dni" className="form-label">Document: </label>
    <input type="number" className="form-control" id="dni" name='dni'
    value={dni} onChange={(e)=> onInputChange(e)}  />
  </div>
  <div className="mb-3">
    <label for="department" className="form-label">Department: </label>
    <input type="text" className="form-control" id="department" name='department'
    value={department} onChange={(e)=> onInputChange(e)}  />
    </div>
  <div className="mb-3">
    <label for="email" className="form-label">Email Address:</label>
    <input type="email" className="form-control" id="email"  name='email'
    value={email} onChange={(e)=> onInputChange(e)} />
  </div>
  <div className="mb-3">
    <label for="salary" className="form-label">Salary: </label>
    <input type="number" className="form-control" id="salary" name='salary' 
    value={salary} onChange={(e)=> onInputChange(e)} />
  </div>
  
  <div className='text-center'>
    <a href='/' className='btn btn-danger btn-md me-3'> Return </a>
  <button type="submit" className="btn btn-warning btn-md">Update</button>
  </div>
</form>  
    </div>

  )
}

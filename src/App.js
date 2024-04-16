
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListEmployees from './Employee/ListEmployees';
import Navbar from './Templates/Navbar';
import AddEmployee from './Employee/addEmployee';
import UpdateEmployee from './Employee/UpdateEmployee';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<ListEmployees/>}/>
        <Route exact path='/add' element={<AddEmployee/>} />
        <Route exact path='/update/:id' element={<UpdateEmployee/>} />
      </Routes>
      
      </BrowserRouter>

   
    

    </div>
  
  );
}

export default App;

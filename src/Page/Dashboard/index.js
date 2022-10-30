import React, {useState} from 'react'
import {employeesData} from '../../data';
import Add from './Add';
import Edit from './Edit';
import Header from './Header';
import List from './List';
import Swal from 'sweetalert2'


function Dashboard() {
  //step01
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee]= useState(null);
  const [isAdding, setIsAdding]=useState(false);
  const [isEditing, setIsEditing] = useState(false);
  //-step01
  //step2
  const handleDelete=(id)=>{
    Swal.fire({
      icon:'warning',
      title:'Are You Sure',
      text:'You will not be able to revert this  ',
      //showConfirmButton:true,
      showCancelButton: true,
      confirmButtonText:'yes, delete',
      cancelButtonText:'no, cancel',
  }).then(result => {
    if(result.value){
      const [employee] = employees.filter(employee=>
        employee.id == id);
        Swal.fire({
          icon:'success',
          title:'deleted',
          text:`${employee.firstName} ${employee.lastName}'s data has been deleted`,
          showConfirmButton:true,
          timer:1500
      });
      // delete request
      setEmployees(employees.filter(employee => employee.id !== id));
    }
  });
  }
  const handleEdit=(id)=>{
    const [employee] = employees.filter(employee=>employee.id==id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  }
  return (
    <div className='container'>
      {/* list */}
      {!isAdding && !isEditing && (
        <>
        <Header
        setIsAdding={setIsAdding}
        />
        <List 
        employees={employees}
        handleEdit={handleEdit}
        handleDelete={handleDelete}/></>
      )}
      {/* add */}
        {isAdding &&  (
        
        <Add 
        employees={employees}
        setEmployees={setEmployees}
        setIsAdding={setIsAdding}/>
       
      )}
       {/* edit */}
       {isEditing &&  (
        
        <Edit 
        employees={employees}
        selectedEmployee={selectedEmployee}
        setEmployees={setEmployees}
        setIsEditing={setIsEditing}/>
       
      )}

    </div>
  )
}

export default Dashboard
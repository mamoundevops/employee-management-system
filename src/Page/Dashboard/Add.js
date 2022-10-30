import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'
function Add({employees, setEmployees, setIsAdding }) {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [salary,setSalary]=useState('');
    const [date,setDate]=useState('');
    
    const textInput = useRef(null);

    useEffect (()=>{
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if(!firstName || !lastName ||!email || !salary || !date){
            return Swal.fire({
                icon:'error',
                title:'Error',
                text:'All Fields Are Required ',
                showConfirmButton:true
            })
        }

        const id = employees.lenght +1;
        const newEmployee ={
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }

        //call add function from http
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon:'success',
            title:'Added',
            text:`${firstName} ${lastName}'s data has been added`,
            showConfirmButton:false,
            timer:1500
        })

    }
  return (
    <div className='small-container'>
        <form onSubmit={handleAdd}>
            <h1>Add Emplyee</h1>
            <table htmlFor="firstName">First Name</table>
            <input
            id='firstName'
            type="text"
            ref={textInput}
            name='firstName'
            value={firstName}
            onChange={e=>setFirstName(e.target.value)}
            />
             <table htmlFor="lastName">Last Name</table>
            <input
            id='lastName'
            type="text"
            name='lalstName'
            value={lastName}
            onChange={e=>setLastName(e.target.value)}
            />
            <table htmlFor="Email">Email</table>
            <input
            id='email'
            type="email"
            name='email'
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
             <table htmlFor="Salary">Salary</table>
            <input
            id='salary'
            type="number"
            name='salary'
            value={salary}
            onChange={e=>setSalary(e.target.value)}
            />
               <table htmlFor="Date">Date</table>
            <input
            id='date'
            type="date"
            name='date'
            value={date}
            onChange={e=>setDate(e.target.value)}
            />
            <div style={{marginTop: '30px'}}>
                <input type="submit" value='Add'/>
                <input 
                style={{marginTop: '12px'}}
                 className="muted-button"
                 type='button'
                 value='Cancel'
                 onClick={()=>setIsAdding(false)}
                 />
            </div>
           
        </form>
    </div>
  )
}

export default Add
import React,{useState, useRef} from 'react'
import Swal from 'sweetalert2'
function Edit({employees, selectedEmployee, setEmployees, setIsEditing}) {
   const id = selectedEmployee.id;
    const [firstName,setFirstName]=useState(selectedEmployee.firstName);
    const [lastName,setLastName]=useState(selectedEmployee.lastName);
    const [email,setEmail]=useState(selectedEmployee.email);
    const [salary,setSalary]=useState(selectedEmployee.salary);
    const [date,setDate]=useState(selectedEmployee.date);
    
    const textInput = useRef(null);
    const handleUpdate = (e)=>{
        e.preventDefault();
        if(!firstName || !lastName ||!email || !salary || !date){
            return Swal.fire({
                icon:'error',
                title:'Error',
                text:'All Fields Are Required ',
                showConfirmButton:true
            })
        }

        
        const employee ={
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }

        for(let i=0; i<employees.lenght;i++){
            if(employees[i].id==id){
                employees.splice(i,1,employee);
                break;
            }
        }
        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon:'success',
            title:'Updated',
            text:`${firstName} ${lastName}'s data has been updated`,
            showConfirmButton:false,
            timer:1500
        })

    }
  
    return (
        <div className='small-container'>
        <form onSubmit={handleUpdate}>
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
                 onClick={()=>setIsEditing(false)}
                 />
            </div>
           
        </form>
    </div>
  )
}

export default Edit
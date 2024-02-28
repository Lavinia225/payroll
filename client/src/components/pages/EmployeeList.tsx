import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

interface Employee {
    id: number;
    first_name: string;
    middle_name?: string;
    last_name: string;
    position: string;
    hire_date: Date;
    salary: boolean;
    wages: number;
    state: string;
    bank_account: {
        routing: number;
        account: number;
        }
    hours: number;
}

interface EmployeeState {
    employees: Employee[] | null;
    loading: boolean;
}

function EmployeeList(){
    const [employees, setEmployees] = useState<EmployeeState>({ //There has got to be a better naming convention than employees.employees
        employees: null,
        loading: true
    })
    const navigate = useNavigate()

    useEffect(()=>{
        fetch("http://127.0.0.1:5000").then(r => r.json()).then(employees => setEmployees({employees, loading: false})).catch(e=>console.warn(e))
    }, [])


    if (employees.loading){
        return <p>Loading</p>
    }
    console.log(employees)
    
    return (
        <>
            <h4>Click an employee to see their profile.</h4>
            <ul className='employee-list'>
                {employees.employees?.map(emp => <li onClick={()=>navigate(`/employees/${emp.id}`)}>{emp.last_name}, {emp.first_name}</li>)}
            </ul>
        </>
    )
}

export default EmployeeList
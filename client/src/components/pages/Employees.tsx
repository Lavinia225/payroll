import {useState, useEffect} from 'react'

function Employees(){
    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        fetch("http://127.0.0.1:5000").then(r => r.json()).then(data => setEmployees(data)).catch(e=>console.warn(e))
    }, [])


    if (employees.length < 1){
        return <p>Loading</p>
    }
    console.log(employees)
    
    return (
        <>
            <p>Heyo, this isn't useful until there's some data. Generate via something like Faker? Create custom seed algorithym?</p>
            {employees.employees.map(emp => <p>{emp.first_name}</p>)}
        </>
    )
}

export default Employees
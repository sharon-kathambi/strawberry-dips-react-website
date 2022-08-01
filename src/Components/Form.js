import React, {  useState } from 'react'
import './FormStyles.css'

const Form = () => {
    const[users, setUsers] = useState([])
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[subject, setSubject] = useState("");
    const[details, setDetails] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name : name,
            email: email,
            subject: subject, 
            details: details
        };

    
    fetch(`${process.env.REACT_APP_API_URL}/user`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
     }).then((res)=> res.JSON())
     .then((user)=> {
        setUsers((users) => [user, ...users]);
        setName("");
        setEmail("");
        setSubject("");
        setDetails("");
     })
     .catch((err) => {
        console.log(err.message)
     })
    }
    return (
        <div className='form'>
            <form>
                <label>Your Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Subject</label>
                <input type='text'></input>
                <label>Details</label>
                <textarea rows='6' placeholder='Type a short message here' />
                <button className='btn' onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form
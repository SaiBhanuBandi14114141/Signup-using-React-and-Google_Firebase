import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
    const [data,setdata]=useState
    (
        {
            username:'',
            email:'',
            password:'',
            confirm_password:''
        }
    )
    const{username,email,password,confirm_password}=data;
    function change_handler(e)
    {
        setdata({...data,[e.target.name]:e.target.value})
    }
    function submit_handler(e)
    {
        e.preventDefault();
        if(password===confirm_password)
        {
            axios.post('https://saibhanubase-default-rtdb.firebaseio.com/register.json',data)
            .then(()=>{
                alert("Submitted Successfully")
            })
        }
        else
        {
            alert('Password Mismatch!!!')
        }
    }

  return (
    <div>
        <form onSubmit={submit_handler}>
        <input type="text" name='username' value={username} onChange={change_handler} placeholder='username'></input> <br/> <br/>
        <input type="email" name='email' value={email} onChange={change_handler} placeholder='email'></input> <br/> <br/>
        <input type="password" name='password' value={password} onChange={change_handler} placeholder='password'></input> <br/> <br/>
        <input type="password" name='confirm_password' value={confirm_password} onChange={change_handler} placeholder='confirm-password'></input> <br/> <br/>
        <input type="submit" ></input>
        </form>
    </div>
  )
}
export default App
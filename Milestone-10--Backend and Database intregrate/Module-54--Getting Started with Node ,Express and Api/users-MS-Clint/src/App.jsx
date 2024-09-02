
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [users,setUsers] =useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  },[]

  )

  return (
    <div>
      <h1>Users Management System(MS) </h1>
      <h3>Numbers of Users : {users.length} </h3>
      <form onSubmit={handleaddUser}>
        <input type="text" name="" id="" />    <br />
        <input type="email" name="" id="" />   <br />
        <input type="submit" value="Add user" />


      </form>

      {
        users.map(users => <p key={users.id}>{users.id} : {users.name} : {users.email}</p>)
      }
    </div>
      
      
  )
}

export default App

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import User from './User';

function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.data) 
     .then(users=>{setUsers(users);setLoading(false)})
    }, [])
    return (
        <div className='row'>
          {!loading?(users.map((user,index)=><User key={index} user={user}/>)):
          (  <Spinner animation="border" role="status" className='spinner'>
          <span className="sr-only">Loading...</span>
        </Spinner>)}  
        </div>
    )
}

export default Users
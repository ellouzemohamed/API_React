import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Profile({match}) {

const [user, setUser] = useState({});
useEffect(() => {
    const getData= async()=>{
        try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/'
        + match.params.id);
        setUser(data);
        
        }
      
        catch(error){
            console.error(Error);
        }
    }
    getData();

}, [match])

console.log(user);
    return (
        
          <div className='col-md-4 mt-3'>
      <Card style={{ width: "18rem" }}>
        <Card.Body className='d-flex flex-column align-items-center'>
          <Card.Title className='user'>{user&&user.name&&user.name[0]}</Card.Title>
          <Card.Text>
            {user&&user.email}
          </Card.Text>
          <Card.Text>
            {user&&`@${user.username}`}
          </Card.Text>
          <Card.Text>
            {user&&user.address&&user.address.city}
          </Card.Text>
        <Link to={'/'}> <Button variant="secondary">Go back</Button></Link> 
        </Card.Body>
      </Card>
    </div>
  );
   

}

export default Profile
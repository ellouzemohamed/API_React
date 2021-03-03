import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function User({user}) {
  return (
    <div className='col-md-4 mt-3'>
      <Card style={{ width: "18rem" }}>
        <Card.Body className='d-flex flex-column align-items-center'>
          <Card.Title className='user'>{user.name[0]}</Card.Title>
          <Card.Text>
            {user.email}
          </Card.Text>
          <Card.Text>
            {`@${user.username}`}
          </Card.Text>
          <Card.Text>
            {user.address.city}
          </Card.Text>
         <Link to={`/users/${user.id}`}> <Button variant="secondary">Go to profile</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default User;
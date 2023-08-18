import React from 'react'
import useFetch from './useFetch'
import { Button } from 'react-bootstrap';

const Users = () => {
    const users = useFetch("https://jsonplaceholder.typicode.com/users")
    
    return (
        <div>
        <Button variant="link" onClick={() => (users)}>
        Users
      </Button>
      <br />
        <ul>
        {users.map(el =>(//
          <li key={el.id}>{el.name}</li>
        ))}
      </ul> 
      </div>
    )
}

export default Users
import React from 'react'

function UsersList({person}) {
  return (
    <div>
    <h1>UsersList</h1>
    <p>{person.name}</p>
    <p>{person.username}</p>

    <p>{person.email}</p>
    <p>{person.address.city}</p>
    <h1>***********************</h1>


    </div>
  )
}

export default UsersList
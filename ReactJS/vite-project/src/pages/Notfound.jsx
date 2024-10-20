import React from 'react'
import Menu from '../components/Menu'
import { useParams } from 'react-router-dom'

const Notfound = () => {
    let {id,name}=useParams();

  return (
    <div>
        <Menu/>
        
        <p>ID: {id}</p>

        <p>Name: {name}</p>

        <h1>Not found</h1>
    </div>
  )
}

export default Notfound

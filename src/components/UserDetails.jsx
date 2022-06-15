import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserDetails = () => {

    const navigate = useNavigate()

    const [data,setData] = useState([])

    const [indData , setIndData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    },[])

    // useEffect(() => {
        
    // },[])

    const getId = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setIndData([data]))
        .catch(err => console.log(err))
    }


    console.log(indData)
    

    // console.log(data.map(item => item.id))

  return (
    <div className='main'>
      <div className='left-side'>
           
            {
                data.map(item => (
                    <div className='inside-left' key={item.id} onClick={() => getId(item.id)}  >
                        <h3>{item.name}</h3>
                        <p>{item.email}</p>
                    </div>
                ))
            }
    </div  >    

            <div>
                {
                    indData.map(item => (
                        <div className='right-side' key={item.id}>
                            <div className='inside-right'>
                                <h3>Name</h3>
                                <p>{item.name}</p>
                            </div>
                            <div className='inside-right'>
                                <h3>Email</h3>
                                <p>{item.email}</p>
                            </div>
                            <div className='inside-right'>
                                <h3>City</h3>
                                <p>{item.address.city}</p>
                            </div>
                        </div>
                        
                    ))
                }
            </div>

    </div>
  )
}

export default UserDetails

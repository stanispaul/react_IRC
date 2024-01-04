import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUser } from '../services/api';
const User =()=>
{
    const[user,setUser]=useState([])

    const fetchData =async()=>{
        try{
            const res = await getUser()
            setUser(res.data)
        }
        catch(e)
        {
            console.log(e)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>

                {user.map ((user)=>(

                <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td><button className='edit-btn'>Edit</button></td>
                    <td><button className='del-btn'>Delete</button></td>
                </tr>
                ))
                }

            </tbody>
        </table>
        </>
    )
}
export default User;
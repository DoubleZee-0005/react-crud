import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';  

const Home = () => {
    
    const [users,setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    },[]);
    
    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3002/users');
        setUser(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3002/users/${id}`);
        loadUsers();
    }

    return (
        <div className = 'container'>
            <h1 className = 'text-primary'>Home</h1>
            <table class="table table-bordered shadow">
                <thead className = "thead-dark">
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map((user,index)=>(
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td class = "d-flex justify-content-center">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <Link to = {`/users/${user.id}`} class="btn btn-warning text-white"><i className = "fas fa-eye mr-2"></i> View</Link>
                                        <Link to = {`/users/edit/${user.id}`} class="btn btn-success text-white"><i className = "far fa-edit mr-2"></i> Edit</Link>
                                        <button onClick = {() => deleteUser(user.id)} class="btn btn-danger text-white"><i className = "far fa-trash-alt mr-2"></i> Delete</button>
                                    </div>
                                </td>
                            </tr>
                       ))
                   }
                </tbody>
            </table>    
        </div>
    )
}

export default Home

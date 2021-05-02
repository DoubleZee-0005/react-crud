import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const User = () => {

    const {id} = useParams();

    const [user,setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    });

    useEffect(() => {
        loadUser();        
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data);
    }

    return (
        <div className = "container" >
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">name</th>
                    <th scope="col">username</th>
                    <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    </tr>
                    <tr>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}

export default User

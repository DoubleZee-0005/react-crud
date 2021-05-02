import React, {useState, useEffect} from  "react";
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {

    let history = useHistory();
    const {id} = useParams();
    const [user,setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    });

    const onInputChange = (e) =>{
        setUser({...user,[e.target.name]: e.target.value})        
    }

    const {name,username,email,phone,website} = user; // destructured the useState user to avoid user.name user.username in input fields

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3002/users/${id}`,user);
        history.push("/")
    };

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data)
    }

    const divStyle = {
        flexDirection : "column",
    }

    return (
        
        <div className = "container d-flex justify-content-center w-75" style = {divStyle}>
            <h1 className = "mb-3">Edit User</h1>
            <form  onSubmit = {e => onSubmit(e)}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Name</label>
                        <input type="text" name = "name" value = {name} className="form-control" id="name" onChange = {e => onInputChange(e)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>User Name</label>
                        <input type="text" name = "username" value = {username} className="form-control" id="username" onChange = {e => onInputChange(e)} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>E-mail</label>
                        <input type="email" name = "email" value = {email} className="form-control" id="email" onChange = {e => onInputChange(e)} />
                    </div>
                    <div className="form-group col-md-4">
                        <label>Phone Number</label>
                        <input type="text" name = "phone" value = {phone} className="form-control" id="phone" onChange = {e => onInputChange(e)} />
                    </div>
                    <div className="form-group col-md-4">
                        <label>Enter your website</label>
                        <input type="text" name = "website" value = {website} className="form-control" id="web" onChange = {e => onInputChange(e)} />
                    </div>
                </div>
                <button type="submit" className="mt-5 btn btn-primary w-100">Edit User</button>
            </form>
        </div>
    )
}


export default EditUser

import React from 'react';
import axios from "axios";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

const Profile = () => {
    const loc = useLocation();
    const [user, setUser] = useState([]);
    const username = loc.pathname.split("/")[1];
    console.log(username);
    useEffect(() =>{
        const getId = async () => {
            const fetchUser = await axios.get(`users/?user=${username}`)
            console.log(fetchUser.data[0])
            setUser(fetchUser.data[0])
            // setId(res.data)
        };
        getId();
    }, [username])
    
    // console.log(id[1]);
    return (
        <div>
            <h1>{user.username}</h1>
            <h1>{user.email}</h1>
            <h1>{user.contact}</h1>
            <h1>{user.studentId}</h1>
            <h1>{user.bloodGroup}</h1>
        </div>
    );
};

export default Profile;
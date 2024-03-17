
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Axios from "axios";
import { setUser } from "../store";
import {  useDispatch } from "react-redux";
import { UseSelector } from "react-redux"; 
// export let users=JSON.parse(localStorage.getItem('users'))||
//                 [
//                     {
//                         id: 1,
//                         userName: "John",
//                         email: "abc@gmail",
//                         address:"123 abc",
//                         password: "1234"
//                     }
//                 ];

export const useUsers = (initialVal = []) => {
    const dispatch= useDispatch();
    const [users, setUsers] = useState(initialVal);

    const initializeUsers =()=>{
        setUsers(JSON.parse(localStorage.getItem('users')) || []);  
    }

    const saveToUsers = (user) => {
           
        // localStorage.setItem("users", JSON.stringify(updatedUsers));
        // console.log("save to users");
        // console.log(users);
        // console.log(localStorage.getItem("users"));

    };

    // Function to generate a random orderId
    const generateUserId = () => {
        return uuidv4();
    };

    const isEmailExists = (email) => {
        return users.some(user => user.email === email);
    };

    const addToUsers = async(userName,email,address,password) => {
        if (isEmailExists(email)) {
            // Handle case where email already exists
            console.error("Email already exists. Please choose a different email.");
            return false;
        }
     
        const newUser = {
            id: generateUserId(),
            userName: userName,
            email: email,
            address: address,
            password: password,
            };
        // setUsers((prevUsers) => [...prevUsers]);
       await Axios.post("http://localhost:9000/api/auth/signup",{
            "username":userName,
            "email":email,
            "password":password,
            "address":address,
           
        }).then((res)=>{
            console.log(res);
        }) 
        setUsers((prevUsers) => [...prevUsers, newUser]); 
        return true;

    };

    const validateUser = async (email, password) => {
        // console.log(email, password);
        await Axios.post("http://localhost:9000/api/auth/signin",{
            "email":email,
            "password":password
        }).then((res)=>{
            console.log(res);
            var id = res.data.id;
            var  email = res.data.email;
            var token = res.data.accessToken;
            var username = res.data.username;
            
             dispatch(setUser({email,id,token,username}));
            
            return res; // Returns the matched user or null if not found
        })  
    };

    return {users, initializeUsers, addToUsers, saveToUsers, validateUser};
};

// const validateUser = async (email, password) => {
//     return new Promise((resolve, reject) => {
//       // Simulate an asynchronous operation, e.g., fetching user data from a server
//       setTimeout(() => {
//         const user = users.find(user => user.email === email && user.password === password);
//         resolve(user); // Resolving with the matched user or null if not found
//       }, 1000); // Simulating a delay of 1 second (adjust as needed)
//     });
//   };
  ;
import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserShow=(props)=>{
   // console.log(props)
    const{id}=props.match.params
    const[user,setUser]=useState({})
    const[posts,setPosts]=useState([])
    useEffect(()=>{
// axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
// .then((response)=>{
//     const result=response.data

//     setUser(result)

// })
// .catch((err)=>{
//     alert(err.message)
// })
// axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
// .then((res)=>{
//     setPosts(res.data)
// })
// .catch((err)=>{
//     alert(err.message)
// })
Promise.all([axios.get(`https://jsonplaceholder.typicode.com/users/${id}`), 
axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)])
.then((values)=>{
    const[userResponse,postResponse]=values
    setUser(userResponse.data)
    setPosts(postResponse.data)
})
    },[id])
    return(
        <div>
        <h1>USER NAME:{user.name}</h1>
        <h2>POST WRITTEN BY USER</h2>
      <ul>  {
            posts.map((post)=>{
                return(
                  <Link key={post.id} to={`/posts/${post.id}`}>  <li key={post.id}>{post.title}</li></Link>
                )
            })
        }</ul>
        
        
        </div>

    )
}
export default UserShow
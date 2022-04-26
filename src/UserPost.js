import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const UserPost=(props)=>{
    const[post,setPost]=useState([])
    const[count,setCount]=useState(10)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            setPost(response.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    const handleloadMore=()=>{
        setCount(count+10)
    }
    return( <div>
        <div style={{backgroundColor:'red', color:'yellow',textAlign:'center'}}>
            <h1>Total Posts:{post.length}</h1></div>
            <div style={{backgroundColor:'green'}}>
          <ul>  {
                post.slice(0,count).map((p)=>{
                
                    return(
                      <Link to={`/posts/${p.id}`} key={p.id}>  <li key={p.id}>{p.title}</li></Link>
                    )
                })
            }</ul>
            <button onClick={handleloadMore}>load more</button>
            </div>
        </div>
    )
}
export default UserPost
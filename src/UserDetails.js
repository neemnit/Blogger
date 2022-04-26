import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserDetails = (props) => {
  console.log("details", props);
  const { id } = props.match.params;
  console.log(id);
  const [details, setDetails] = useState({});
  const [username, setUsername] = useState({});
  const [comment, setComments] = useState([]);
  const [id1, setId] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setDetails(res.data);
        setId(res.data.userId);
      })
      .catch((err) => {
        alert(err.message);
      });
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //   .then((response1) => {
    //     setId(response1.data.userId);
    //   })
    //   .catch((err)=>{
    //     alert(err.message)
    //   });

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id1}`)
      .then((resp) => {
        setUsername(resp.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => {
        setComments(response.data);
      });
  }, [id, id1]);

  return (
    <div>
      <h1>USERNAME:{username.name}</h1>
      <h2>TITLE:{details.title}</h2>
      <h3>
        BODY:
        <br />
        {details.body}
      </h3>
      <hr />
      <h3>COMMENTS</h3>
      <ul>
        {comment.map((c) => {
          return <li key={c.id}> {c.body}</li>;
        })}
      </ul>
      <hr/>
      <Link  to={`/users/${id1}`}>More posts on author:{username.name}</Link>
    </div>
  );
};
export default UserDetails;

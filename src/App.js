import React from "react";
import { Link, Route } from "react-router-dom";
import UsersList from "./UserList";
import UserShow from "./UserShow";
import UserPost from "./UserPost";
import UserDetails from "./UserDetails";

const App = (props) => {
  return (
    <div>
      <ul class="navbar navbar-dark bg-dark">

       <li class="nav-item"> <Link to="/"  class="nav-link">Home </Link></li>
       <li class="nav-item">  <Link to="/users"  class="nav-link">Users </Link></li>
       <li class="nav-item"> <Link to="/posts"  class="nav-link">Posts </Link></li>
      </ul>
      <Route path="/users" component={UsersList} exact={true} />
      <Route path="/users/:id" component={UserShow} />
      <Route path="/posts" component={UserPost} exact={true} />
      <Route path="/posts/:id" component={UserDetails} />
    </div>
  );
};

export default App;

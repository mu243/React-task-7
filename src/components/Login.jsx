import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import "@fontsource/poppins";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="ms-2">
      <div >
        <h1 style={{fontSize:38}} className="mt-4 mb-4" >
          Log In
        </h1>
       
      
        <form onSubmit={handleSubmit}>

        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="text" class="form-control" id="exampleInputEmail1" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your details with anyone else.</div>
  </div>
        

            <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
  </div>
          
          <button
            type="submit"
            className="btn btn-primary"
            >
            Log In
          </button>

        </form>

        </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, TextField, Typography } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's assume a successful login for any non-empty username and password
    if (username.trim() !== "" && password.trim() !== "") {
      // Redirect to the Job Profile Upload page after successful login
      navigate("/job-profile-upload");
    } else {
      // Handle failed login (show error message, etc.)
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div style={containerStyle}>
        <Typography variant="h4" component="h1" gutterBottom>
          Zenith AI Aggregator
        </Typography>
        <div style={formStyle}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </div>
    </Container>
  );
};

const containerStyle = {
  textAlign: "center",
  marginTop: "50px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "300px",
  margin: "20px auto",
};

export default Login;

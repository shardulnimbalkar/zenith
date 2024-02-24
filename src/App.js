// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import JobProfileUpload from "./screens/JobProfileUpload";
import Login from "./screens/Login";
import AboutUs from "./screens/AboutUs";
import BackgroundInteractive from "./components/Background";
import BottomSection from "./components/BottomSection";
import logoImage from "./images.png";
import "./App.css";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Router>
      <BackgroundInteractive />

      <div className="app-container">
        <AppBar position="static" className="app-header">
          <Toolbar>
            <Button color="inherit" onClick={handleDrawerOpen}>
              <img src={logoImage} alt="Logo" style={{ marginRight: "10px", height: "30px" }} />
              <Typography variant="h6" component="div">
                Hire Hub
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
  <div className="drawer-content">
    <List>
      <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/login" onClick={handleDrawerClose}>
        <ListItemText primary="Login" />
      </ListItem>
      <ListItem button component={Link} to="/about" onClick={handleDrawerClose}>
        <ListItemText primary="About Us" />
      </ListItem>
      {/* Add more items as needed */}
    </List>
  </div>
</Drawer>

        <Container className="content-container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/job-profile-upload" element={<JobProfileUpload />} />
            <Route
              path="/"
              element={
                <div>
                  <Home />
                  <BottomSection />
                </div>
              }
            />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <Typography variant="h4" component="div" gutterBottom>
        Welcome to Hire Hub, where the future of hiring begins!
      </Typography>
      <Typography variant="body1" component="div" paragraph style={{ textAlign: "justify" }}>
        Say goodbye to endless hours sifting through stacks of resumes. From seasoned professionals
        to fresh talents, Hire Hub connects you with the best fit for your team, saving you valuable
        time and resources. Join the hiring revolution today and unlock a world of possibilities with
        Hire Hub!
      </Typography>
      <Button component={Link} to="/login" variant="outlined" color="primary">
        Get Started!
      </Button>
    </div>
  );
};

export default App;

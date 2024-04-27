import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NetflixLogo from '../Netflix_assets/netflix_logo.png';
import NetflixAvatar from '../Netflix_assets/avatar.png';

function NetflixNav() {
    return (
      <Navbar variant="dark" expand="lg">
        <div className="container">
          <Navbar.Brand href="https://www.netflix.com/it/" target="_blank">
            <img height="40" src={NetflixLogo} alt="Netflix Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#TVShows" className="active">TV Shows</Nav.Link>
              <Nav.Link href="#Movies">Movies</Nav.Link>
              <Nav.Link href="#RecentlyAdded">Recently Added</Nav.Link>
              <Nav.Link href="#MyList">My List</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <Nav.Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                </svg>
              </Nav.Link>
              <Nav.Link className="text-light" href="#Kids">KIDS</Nav.Link>
              <Nav.Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-bell-fill" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"></path>
                </svg>
              </Nav.Link>
              <NavDropdown title={<img height="40" src={NetflixAvatar} alt="User Avatar" />} id="basic-nav-dropdown" menuVariant="dark">
                <NavDropdown.Item href="profile.html" target="_blank">Profile Settings</NavDropdown.Item>
                <NavDropdown.Item href="extra.html" target="_blank">Account Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
  
  export default NetflixNav;

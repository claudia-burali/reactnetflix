import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import NetflixLogo from "../Netflix_assets/netflix_logo.png";
import NetflixAvatar from "../Netflix_assets/avatar.png";

function ProfilePage() {
  return (
    <div className="text-light">
      <header>
        <img height="40" src={NetflixLogo} alt="Netflix Logo" />
      </header>
      <main>
        <div>
          <h1 className="text-light">Edit Profile</h1>
        </div>
        <div className="flex_pro border_bot">
          <div>
             <img height="150" src={NetflixAvatar} alt="User Avatar" />
          </div>
          <div>
            <div className="border_bot">
              <h3 className="bg-secondary">Strive Student</h3>
              <h3>Language:</h3>
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#">Italian</Dropdown.Item>
                  <Dropdown.Item href="#">Spanish</Dropdown.Item>
                  <Dropdown.Item href="#">German</Dropdown.Item>
                  <Dropdown.Item href="#">French</Dropdown.Item>
                  <Dropdown.Item href="#">Japanese</Dropdown.Item>
                  <Dropdown.Item href="#">Dutch</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="border_bot">
              <h3>Maturity Settings:</h3>
              <Button variant="secondary" className="text-light mb-4">
                ALL MATURITY RATINGS
              </Button>
              <p>
                Show title of <strong>all maturity ratings</strong> for this profile.
              </p>
              <Button variant="outline-light" className="mb-4">
                EDIT
              </Button>
            </div>
            <div className="my-3">
              <h3>Autoplay controls</h3>
              <div>
                <input type="checkbox" />
                <p className="d-inline">Autoplay next episode in a series on all devices.</p>
              </div>
              <div>
                <input type="checkbox" />
                <p className="d-inline">Autoplay previews while browsing on all devices.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-2">
          <Button variant="outline-light">SAVE</Button>
          <Button variant="outline-light">CANCEL</Button>
          <Button variant="outline-light">DELETE PROFILE</Button>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;

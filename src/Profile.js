import React from "react";
import { Route, Link, withRouter } from "react-router-dom";

import ProfileData from "./Components/ProfileData";
import EditProfileData from "./Components/EditProfileData";
import logo from "./logo.svg";
import "./Profile.css";

const Profile = props => {
  return (
    <>
      <div className="Profile">
        <img src={logo} className="Profile-logo" alt="logo" />
        {props.location.pathname !== "/" ? (
          <Link to="/">
            <p>Profile Page</p>
          </Link>
        ) : (
          <p>Profile Page</p>
        )}
        <p>|</p>
        {props.location.pathname !== "/edit" ? (
          <Link to="/edit">
            <p>Edit Profile Page</p>
          </Link>
        ) : (
          <p>Edit Profile Page</p>
        )}
      </div>
      <div className="Main">
        <Route exact path="/" component={ProfileData} />
        <Route path="/edit" component={EditProfileData} />
      </div>
    </>
  );
};

export default withRouter(Profile);

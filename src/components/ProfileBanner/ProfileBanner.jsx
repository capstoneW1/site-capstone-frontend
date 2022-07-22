import * as React from "react";
import "./ProfileBanner.css";
import { useAuthContext } from "../../contexts/auth";

export default function ProfileBanner() {
  const { user } = useAuthContext();
  console.log("user in profile banner", user);
  return (
    <div className="profile-banner">
      <div className="profile-image"></div>
      <div className="banner-gradient"></div>
      <div className="banner-bottom">
        <div className="user-info">
          <h5 className="pb-user-name">
            {user.first_name} {user.last_name}
          </h5>
          <p className="pb-user-role">Reseller</p>
        </div>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
    </div>
  );
}

import React from "react";

function AccountPage() {
  return (
      <main className="container-fluid text-align-left">
        <div className="border_bot d-flex">
          <h2>ACCOUNT</h2>
        </div>
        <div className="d-flex">
          <h3>MEMBERSHIP & BILLING</h3>
          <div className="border_bot">
            <div>
            <a className="link" href="#1">Change account email</a>
            <a className="link" href="#2">Change password</a>
            <a className="link" href="#3">Change phone number</a>
          </div>
          <div>
            <a className="link" href="#4">Update payment info</a>
            <a className="link" href="#5">Billing details</a>
          </div>
          <div>
            <a className="link" href="#6">Redeem gift card or promo code</a>
            <a className="link" href="#7">Where to buy gift cards</a>
          </div>
          </div>
        </div>
        <div className="border_bot d-flex">
          <h3>PLAN DETAILS</h3>
          <a className="link" href="#8">Change plan</a>
        </div>
        <div className="border_bot d-flex">
          <h3>SETTINGS</h3>
          <a className="link" href="#9">Parental controls</a>
          <a className="link" href="#10">Test participation</a>
          <a className="link" href="#11">Manage download devices</a>
          <a className="link" href="#12">Activate a device</a>
          <a className="link" href="#13">Recent device streaming activity</a>
          <a className="link" href="#14">Sign out of all devices</a>
        </div>
        <div className="border_bot d-flex">
          <h3>MY PROFILE</h3>
          <h3 className="bg-secondary">Strive Student</h3>
          <a className="link" href="#15">Language</a>
          <a className="link" href="#16">Playback settings</a>
          <a className="link" href="#17">Subtitle AccountPageearance</a>
          <a className="link" href="#18">Viewing activity</a>
          <a className="link" href="#19">Ratings</a>
          <a className="link" href="#20">Manage profiles</a>
          <a className="link" href="#21">Add profile email</a>
        </div>
      </main>
  );
}

export default AccountPage;
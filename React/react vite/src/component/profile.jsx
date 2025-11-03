import React from 'react';

function Profile(props) {
  const { name, branch, section, college, pic } = props.data;

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <img src={pic} alt={name} width="200" />
      <h2>Name: {name}</h2>
      <h2>Branch: {branch}</h2>
      <h2>Section: {section}</h2>
      <h2>College: {college}</h2>
    </div>
  );
}


export default Profile;
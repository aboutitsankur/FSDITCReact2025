import React from 'react';

function Profile(props){
    return(
        <div className='profile-container'>
            <h1>User Profile</h1>
            <p>This is the profile page.</p>
            <h2>{props.name}</h2>
            <h2>Branch : {props.branch}</h2>
            <h2>Section : {props.section}</h2>
            <h2>College :{props.college}</h2>
        </div>
    );
}

export default Profile;
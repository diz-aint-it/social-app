
import React from 'react';
import ProfileCard from './ProfileCard';
import profileData from './data';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">There are three Profiles</h1>
      <div className="profile-card-list">
        {profileData.map((profile) => (
          <ProfileCard key={profile.id} id={profile.id} name={profile.name} picture={profile.picture} />
        ))}
      </div>
    </div>
  );
};

export default Home;

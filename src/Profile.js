// src/Profile.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import profileData from './data';
import './Profile.css';

const Profile = () => {
  const { id } = useParams();
  const profile = profileData.find((p) => p.id === parseInt(id));

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h2 className="profile-name">{profile.name}</h2>
      <img src={profile.picture} alt={profile.name} className="profile-picture" />
      <p className="profile-bio">{profile.bio}</p>
      <h3 className="profile-posts-heading">Posts:</h3>
      <ul className="profile-posts-list">
        {profile.posts.map((post, index) => (
          <li key={index} className="profile-post-item">
            {post}
          </li>
        ))}
      </ul>
      <Link to="/" className="home-link">
        Back to Home
      </Link>
    </div>
  );
};

export default Profile;

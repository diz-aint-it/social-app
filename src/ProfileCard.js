
import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css'; 

const ProfileCard = ({ id, name, picture }) => {
  return (
    <div className="profile-card">
      <Link to={`/profile/${id}`}>
        <img src={picture} alt={name} className="profile-picture" />
        <h3 className="profile-name">{name}</h3>
      </Link>
    </div>
  );
};

export default ProfileCard;

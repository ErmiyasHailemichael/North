import { useContext } from 'react';
import { UserContext } from '../UserContext';

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div className="user-profile">
      <h3>User Profile</h3>
      <p><span className="label">Name:</span> {user.name}</p>
      <p><span className="label">Email:</span> {user.email}</p>
      <p><span className="label">Theme:</span> {user.themePreference}</p>
    </div>
  );
}

export default UserProfile;
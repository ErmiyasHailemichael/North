import { useState } from 'react';

function UserProfile() {
  const [userProfile, setUserProfile] = useState({
    name: 'Ermi',
    email: 'ermi@email.com',
    address: {
      street: '123 Main St',
      city: 'Seattle',
      country: 'USA'
    }
  });

  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  function updateAddress() {
    setUserProfile(prevProfile => ({
      ...prevProfile,
      address: {
        ...prevProfile.address,
        street: street || prevProfile.address.street,
        city: city || prevProfile.address.city,
        country: country || prevProfile.address.country
      }
    }));
  }

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>User Profile</h1>

      <div>
        <input
          type="text"
          placeholder="Street"
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
        <button onClick={updateAddress}>Update Address</button>
      </div>

      <div>
        <h2>Current Profile</h2>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>Street: {userProfile.address.street}</p>
        <p>City: {userProfile.address.city}</p>
        <p>Country: {userProfile.address.country}</p>
      </div>
    </div>
  );
}

export default UserProfile;
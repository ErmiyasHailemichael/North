import React from 'react';
import { useImmer } from 'use-immer';

const UserProfileWithImmer = () => {
  // Requirement 2: Initialize nested state logic
  const [userProfile, updateUserProfile] = useImmer({
    name: 'Ermi',
    email: 'ermi@example.com',
    contactDetails: {
      phone: '123-456-7890',
      address: '123 React Lane'
    },
    preferences: {
      newsletter: false,
      notifications: true
    }
  });

  // Requirement 3: Implementation of updates using draft mutation
  const updateContact = (field, value) => {
    updateUserProfile(draft => {
      draft.contactDetails[field] = value;
    });
  };

  const toggleNewsletter = () => {
    updateUserProfile(draft => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '40px auto', border: '2px solid #333', borderRadius: '12px' }}>
      <h1>User Profile Settings</h1>
      
      
      <section style={{ marginBottom: '20px' }}>
        <p>Name: <input value={userProfile.name} onChange={e => updateUserProfile(d => { d.name = e.target.value })} /></p>
        <p>Phone: <input value={userProfile.contactDetails.phone} onChange={e => updateContact('phone', e.target.value)} /></p>
        <p>Address: <input value={userProfile.contactDetails.address} onChange={e => updateContact('address', e.target.value)} /></p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <label>
          <input type="checkbox" checked={userProfile.preferences.newsletter} onChange={toggleNewsletter} />
          Subscribe to Newsletter
        </label>
      </section>

      
      <div style={{ background: '#eee', padding: '15px', borderRadius: '8px' }}>
        <h3>Live State Preview</h3>
        <pre>{JSON.stringify(userProfile, null, 2)}</pre>
      </div>
    </div>
  );
};

export default UserProfileWithImmer;
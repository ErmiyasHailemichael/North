import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';

function UserEditor() {
  const { user, updateUser } = useContext(UserContext);
  const [nameInput, setNameInput] = useState(user.name);
  const [emailInput, setEmailInput] = useState(user.email);
  const [feedback, setFeedback] = useState('');

  function handleUpdate() {
    const trimmedName = nameInput.trim();
    const trimmedEmail = emailInput.trim();

    if (!trimmedName) {
      setFeedback('❌ Name cannot be empty.');
      return;
    }
    if (!trimmedEmail) {
      setFeedback('❌ Email cannot be empty.');
      return;
    }
    if (!trimmedEmail.includes('@')) {
      setFeedback('❌ Email must contain "@".');
      return;
    }

    updateUser({ name: trimmedName, email: trimmedEmail });
    setFeedback('✅ Profile updated successfully!');
  }

  function handleThemeToggle() {
    const next = user.themePreference === 'light' ? 'dark' : 'light';
    updateUser({ themePreference: next });
    setFeedback(`✅ Theme switched to "${next}".`);
  }

  function handleReset() {
    const defaults = { name: 'Ermi H.', email: 'ermi@example.com', themePreference: 'light' };
    updateUser(defaults);
    setNameInput(defaults.name);
    setEmailInput(defaults.email);
    setFeedback('✅ Reset to default user.');
  }

  return (
    <section className="user-editor">
      <h3>Edit User (Live Context Update)</h3>

      <div className="field">
        <label>Name</label>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Email</label>
        <input
          type="text"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
      </div>

      <div className="button-row">
        <button onClick={handleUpdate}>Update Profile</button>
        <button onClick={handleThemeToggle}>
          Toggle Theme (currently: {user.themePreference})
        </button>
        <button className="reset-btn" onClick={handleReset}>Reset</button>
      </div>

      {feedback && <p className="feedback">{feedback}</p>}
    </section>
  );
}

export default UserEditor;
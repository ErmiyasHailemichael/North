// App.js
// Root component that renders the UserProfile component
// with sample data passed as props.

import UserProfile from './Userprofile';

function App() {
  return (
    <div>
      <UserProfile
        name="Jane Doe"
        email="jane.doe@example.com"
        photoUrl="/blank_pp.png"
      />
    </div>
  );
}

export default App;
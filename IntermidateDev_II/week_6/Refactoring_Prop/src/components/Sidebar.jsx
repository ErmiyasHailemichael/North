import UserProfile from './UserProfile';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Sidebar</h2>
      <p className="note">This component passes NO props to UserProfile.</p>
      <UserProfile />
    </aside>
  );
}

export default Sidebar;
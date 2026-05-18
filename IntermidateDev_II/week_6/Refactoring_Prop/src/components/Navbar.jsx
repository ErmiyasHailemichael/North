import { useContext } from 'react';
import { UserContext } from '../UserContext';

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar">
      <span className="app-title">Context Refactor App</span>
      <span className="nav-user">Logged in as: {user.name}</span>
    </nav>
  );
}

export default Navbar;
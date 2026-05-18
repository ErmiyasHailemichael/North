import { useContext } from 'react';
import { UserContext, UserProvider } from './UserContext';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import UserEditor from './components/UserEditor';
import './App.css';

function AppContent() {
  const { user } = useContext(UserContext);

  return (
    <div className={user.themePreference === 'dark' ? 'app dark' : 'app'}>
      <Navbar />
      <div className="app-body">
        <Dashboard />
        <UserEditor />
      </div>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
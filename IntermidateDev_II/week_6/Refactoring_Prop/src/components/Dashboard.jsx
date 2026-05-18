import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <main className="dashboard">
      <h2>Dashboard</h2>
      <p className="note">This component passes NO props to Sidebar.</p>
      <Sidebar />
    </main>
  );
}

export default Dashboard;
type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: {
      name: string;
    };
    address: {
      street: string;
      city: string;
    };
  };
  
  export default async function UserProfile({
    params,
  }: {
    params: { id: string };
  }) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const user: User = await res.json();
  
    return (
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <a href="/users" style={{ color: "#333", marginBottom: "1rem", display: "block" }}>
          ← Back to Users
        </a>
        <div style={{
          padding: "2rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ marginBottom: "1.5rem" }}>{user.name}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
          </div>
        </div>
      </div>
    );
  }
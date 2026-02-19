import Link from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>Users</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div style={{
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "box-shadow 0.2s",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              <h3>{user.name}</h3>
              <p style={{ color: "#666" }}>{user.email}</p>
              <p style={{ color: "#666" }}>{user.phone}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

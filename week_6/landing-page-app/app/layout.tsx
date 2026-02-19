import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Page App",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
          background: "#333",
          color: "#fff",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h1>MyApp</h1>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <a href="/">Home</a>
            <a href="/users">Users</a>
          </nav>
        </header>

        <main style={{ minHeight: "80vh", padding: "2rem" }}>
          {children}
        </main>

        <footer style={{
          background: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "1rem"
        }}>
          <p>© 2026 MyApp. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
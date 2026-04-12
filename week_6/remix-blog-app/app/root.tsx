import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "./app.css";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header style={{
          background: "#333",
          color: "#fff",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h1><a href="/" style={{ color: "#fff" }}>MyBlog</a></h1>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <a href="/">Home</a>
            <a href="/blog/category/tech">Tech</a>
            <a href="/blog/category/lifestyle">Lifestyle</a>
          </nav>
        </header>

        <main style={{ minHeight: "80vh", padding: "2rem" }}>
          <Outlet />
        </main>

        <footer style={{
          background: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "1rem"
        }}>
          <p>© 2026 MyBlog. All rights reserved.</p>
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
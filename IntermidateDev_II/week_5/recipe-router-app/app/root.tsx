import { Links, Meta, Outlet, Scripts, ScrollRestoration, NavLink } from "react-router";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>Recipe Gallery</title>
      </head>
      <body style={{ margin: "0", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}>

        <nav style={{
          backgroundColor: "white",
          borderBottom: "1px solid #ddd",
          padding: "16px 32px",
          display: "flex",
          gap: "24px",
          alignItems: "center",
        }}>
          <span style={{ fontWeight: "bold", fontSize: "18px", color: "#e67e22" }}>
            🍴 Recipe Gallery
          </span>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#e67e22" : "#333",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#e67e22" : "#333",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Gallery
          </NavLink>
        </nav>

        <Outlet />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
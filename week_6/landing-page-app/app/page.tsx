export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section style={{
        background: "#f4f4f4",
        padding: "4rem 2rem",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Welcome to MyApp
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          A simple landing page built with Next.js
        </p>
      </section>

      {/* About Section */}
      <section style={{ padding: "3rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ marginBottom: "1rem" }}>About Us</h2>
        <p style={{ color: "#666" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Services Section */}
      <section style={{ padding: "3rem 2rem", background: "#f4f4f4" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Our Services</h2>
        <div style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          {["Service One", "Service Two", "Service Three"].map((service) => (
            <div key={service} style={{
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "8px",
              width: "200px",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              <h3>{service}</h3>
              <p style={{ color: "#666", marginTop: "0.5rem" }}>
                Placeholder text for {service}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "3rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ marginBottom: "1rem" }}>Contact Us</h2>
        <p style={{ color: "#666" }}>
          Have questions? Reach out to us at contact@myapp.com and we'll 
          get back to you as soon as possible.
        </p>
      </section>

    </div>
  );
}
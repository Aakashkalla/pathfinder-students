import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 600 }}>
        <h1 style={{ fontSize: 32, marginBottom: 16 }}>
          Career Explorer for Students
        </h1>

        <p style={{ marginBottom: 16 }}>
          Many students only hear about a few career options like engineering,
          medicine, or accounting. This tool helps you explore a wider range of
          career paths based on your interests and preferences.
        </p>

        <p style={{ marginBottom: 24 }}>
          This is not a test and not a final decision. It’s a starting point for
          exploration and discussion.
        </p>

        <Link href="/questions">
          <button
            style={{
              padding: "12px 20px",
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Start Exploring
          </button>
        </Link>

        <p style={{ marginTop: 24, fontSize: 14, color: "#555" }}>
          Recommended for students in classes 9–10.
        </p>
      </div>
    </main>
  );
}

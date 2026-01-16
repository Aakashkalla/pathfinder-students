import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ fontSize: 36, marginBottom: 12 }}>
        Career Explorer
      </h1>

      <p style={{ fontSize: 18, color: "#374151", marginBottom: 24 }}>
        A simple tool to help students explore career paths beyond the usual options.
      </p>

      <div style={{ marginBottom: 24 }}>
        <p style={{ marginBottom: 8 }}>
          • Designed for students in classes 9–10
        </p>
        <p style={{ marginBottom: 8 }}>
          • Based on interests, not marks
        </p>
        <p>
          • For exploration, not final decisions
        </p>
      </div>

      <Link href="/questions">
        <button
          style={{
            padding: "14px 28px",
            fontSize: 16,
            backgroundColor: "#4f46e5",
            color: "#ffffff",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
          }}
        >
          Start Exploring
        </button>
      </Link>

      <p style={{ marginTop: 32, fontSize: 14, color: "#6b7280" }}>
        This tool helps you discover possibilities. Talk to parents, teachers,
        and counselors before making decisions.
      </p>
    </main>
  );
}

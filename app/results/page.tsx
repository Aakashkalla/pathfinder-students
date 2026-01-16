"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { careerClusters } from "@/data/clusters";

export default function ResultsPage() {
    const searchParams = useSearchParams();
    const top = searchParams.get("top");

    if (!top) {
        return <p>No results found.</p>;
    }

    const topClusters = top.split(",");

    return (
        <main>
        {/* Header */}
        <h1 style={{ fontSize: 28, marginBottom: 12 }}>
            Your Career Exploration Results
        </h1>

        <p style={{ color: "#374151", marginBottom: 24 }}>
            These career areas matched your interests and preferences.
        </p>

        {/* Results */}
        <ol style={{ paddingLeft: 0, listStyle: "none" }}>
            {topClusters.map((key, index) => {
            const cluster = careerClusters[key as keyof typeof careerClusters];

            return (
                <li
                key={key}
                style={{
                    marginBottom: 20,
                    padding: 16,
                    border: "1px solid #e5e7eb",
                    borderRadius: 10,
                    backgroundColor: "#ffffff",
                }}
                >
                <p
                    style={{
                    fontSize: 14,
                    color: "#6b7280",
                    marginBottom: 4,
                    }}
                >
                    Option {index + 1}
                </p>

                <h3 style={{ fontSize: 20, marginBottom: 6 }}>
                    {cluster.title}
                </h3>

                <p style={{ color: "#374151" }}>
                    {cluster.shortDescription}
                </p>
                </li>
            );
            })}
        </ol>

        {/* Disclaimer */}
        <p
            style={{
            marginTop: 24,
            fontSize: 14,
            color: "#6b7280",
            fontStyle: "italic",
            }}
        >
            This tool is for exploration only. Final decisions should be made with
            parents, teachers, and counselors.
        </p>

        {/* Actions */}
        <div style={{ marginTop: 32 }}>
            <Link href="/questions">
            <button
                style={{
                padding: "12px 20px",
                backgroundColor: "#4f46e5",
                color: "#ffffff",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                }}
            >
                Retake Assessment
            </button>
            </Link>
        </div>
        </main>
    );
}

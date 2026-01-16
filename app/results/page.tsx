"use client";

import { useSearchParams } from "next/navigation";
import { careerClusters } from "@/data/clusters";

export default function ResultsPage() {
    const searchParams = useSearchParams();
    const top = searchParams.get("top");

    if (!top) {
        return <p>No results found.</p>;
    }

    const topClusters = top.split(",");

    return (
        <main style={{ padding: 24 }}>
        <h1>Your Career Exploration Results</h1>

        <p>
            Based on your answers, these career areas may be worth exploring:
        </p>

        <ol>
            {topClusters.map((key) => {
            const cluster = careerClusters[key as keyof typeof careerClusters];

            return (
                <li key={key} style={{ marginBottom: 16 }}>
                <h3>{cluster.title}</h3>
                <p>{cluster.shortDescription}</p>
                </li>
            );
            })}
        </ol>

        <p style={{ marginTop: 24, fontStyle: "italic" }}>
            This tool is for exploration only. Final decisions should be made with
            parents, teachers, and counselors.
        </p>
        </main>
    );
}

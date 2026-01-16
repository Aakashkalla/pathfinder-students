"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { questions } from "@/data/questions";
import { calculateResults } from "@/lib/calculateResults";

export default function QuestionsPage() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string[]>>({});

    const currentQuestion = questions[currentIndex];
    const selectedOptions = answers[currentQuestion.id] || [];
    const selectedForCurrent = selectedOptions.length > 0;

    function handleOptionSelect(optionId: string) {
        const questionId = currentQuestion.id;
        const prevSelections = answers[questionId] || [];

        let updatedSelections: string[];

        if (currentQuestion.multiple) {
        updatedSelections = prevSelections.includes(optionId)
            ? prevSelections.filter((id) => id !== optionId)
            : [...prevSelections, optionId];
        } else {
        updatedSelections = [optionId];
        }

        setAnswers({
        ...answers,
        [questionId]: updatedSelections,
        });
    }

    return (
        <main>
        {/* Progress */}
        <p style={{ color: "#6b7280", marginBottom: 8 }}>
            Question {currentIndex + 1} of {questions.length}
        </p>

        {/* Question */}
        <h2 style={{ fontSize: 22, marginBottom: 20 }}>
            {currentQuestion.question}
        </h2>

        {/* Options */}
        <ul style={{ listStyle: "none", padding: 0 }}>
            {currentQuestion.options.map((option) => {
            const isSelected = selectedOptions.includes(option.id);

            return (
                <li
                key={option.id}
                style={{
                    marginBottom: 12,
                    padding: 12,
                    border: "1px solid #e5e7eb",
                    borderRadius: 8,
                    backgroundColor: isSelected ? "#eef2ff" : "#ffffff",
                    cursor: "pointer",
                }}
                onClick={() => handleOptionSelect(option.id)}
                >
                <label style={{ cursor: "pointer" }}>
                    <input
                    type={currentQuestion.multiple ? "checkbox" : "radio"}
                    checked={isSelected}
                    onChange={() => handleOptionSelect(option.id)}
                    style={{ marginRight: 8 }}
                    />
                    {option.label}
                </label>
                </li>
            );
            })}
        </ul>

        {/* Validation message */}
        {!selectedForCurrent && (
            <p style={{ color: "#dc2626", marginTop: 8 }}>
            Please select at least one option to continue.
            </p>
        )}

        {/* Navigation buttons */}
        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            <button
            onClick={() => setCurrentIndex((i) => i - 1)}
            disabled={currentIndex === 0}
            style={{
                padding: "10px 18px",
                borderRadius: 6,
                border: "1px solid #d1d5db",
                backgroundColor: "#ffffff",
                cursor: "pointer",
            }}
            >
            Previous
            </button>

            <button
            onClick={() => {
                if (currentIndex === questions.length - 1) {
                const rankedClusters = calculateResults(answers, questions);
                router.push(
                    `/results?top=${rankedClusters.slice(0, 3).join(",")}`
                );
                } else {
                setCurrentIndex((i) => i + 1);
                }
            }}
            disabled={!selectedForCurrent}
            style={{
                padding: "10px 18px",
                borderRadius: 6,
                border: "none",
                backgroundColor: selectedForCurrent ? "#4f46e5" : "#c7d2fe",
                color: "#ffffff",
                cursor: "pointer",
            }}
            >
            {currentIndex === questions.length - 1 ? "See Results" : "Next"}
            </button>
        </div>
        </main>
    );
}

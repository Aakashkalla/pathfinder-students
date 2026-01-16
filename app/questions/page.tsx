"use client";

import { useState } from "react";
import { questions } from "@/data/questions";

export default function QuestionsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentQuestion = questions[currentIndex];

    return (
        <main style={{ padding: 24 }}>
        <h2>
            Question {currentIndex + 1} of {questions.length}
        </h2>

        <h3>{currentQuestion.question}</h3>

        <ul>
            {currentQuestion.options.map((option) => (
            <li key={option.id}>
                {option.label}
            </li>
            ))}
        </ul>

        <button
            className="bg-red-300 cursor-pointer"
            onClick={() => setCurrentIndex((i) => i + 1)}
            disabled={currentIndex === questions.length - 1}
        >
            Next
        </button>
        </main>
    );
}

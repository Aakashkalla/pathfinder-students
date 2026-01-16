"use client";

import { useState } from "react";
import { questions } from "@/data/questions";

export default function QuestionsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string[]>>({});

    const currentQuestion = questions[currentIndex];

    function handleOptionSelect(optionId: string) {
    const questionId = currentQuestion.id;
    const prevSelections = answers[questionId] || [];

    let updatedSelections: string[];

    if (currentQuestion.multiple) {
        if (prevSelections.includes(optionId)) {
        updatedSelections = prevSelections.filter((id) => id !== optionId);
        } else {
        updatedSelections = [...prevSelections, optionId];
        }
    } else {
        updatedSelections = [optionId];
    }

    setAnswers({
        ...answers,
        [questionId]: updatedSelections,
    });
    }

    return (
        <main style={{ padding: 24 }}>
        <h2>
            Question {currentIndex + 1} of {questions.length}
        </h2>

        <h3>{currentQuestion.question}</h3>

        <ul style={{ listStyle: "none", padding: 0 }}>
        {currentQuestion.options.map((option) => {
            const selectedOptions = answers[currentQuestion.id] || [];
            const isSelected = selectedOptions.includes(option.id);

            return (
            <li key={option.id} style={{ marginBottom: 8 }}>
                <label style={{ cursor: "pointer" }}>
                <input
                    type={currentQuestion.multiple ? "checkbox" : "radio"}
                    checked={isSelected}
                    onChange={() => handleOptionSelect(option.id)}
                />
                {" "}
                {option.label}
                </label>
            </li>
            );
        })}
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

import { ClusterKey } from "@/data/clusters";
import { Question } from "@/data/questions";

type Answers = Record<string, string[]>;

export function calculateResults(
    answers: Answers,
    questions: Question[]
    ) {
    const scores: Record<ClusterKey, number> = {
        TECH: 0,
        HEALTH: 0,
        BUS: 0,
        DESIGN: 0,
        LAW: 0,
        RESEARCH: 0,
        MEDIA: 0,
        VOC: 0,
    };

    questions.forEach((question) => {
        const selectedOptions = answers[question.id] || [];

    question.options.forEach((option) => {
        if (selectedOptions.includes(option.id)) {
            Object.entries(option.scores).forEach(([cluster, value]) => {
            scores[cluster as ClusterKey] += value;
            });
        }
        });
    });

    return Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .map(([cluster]) => cluster as ClusterKey);
}

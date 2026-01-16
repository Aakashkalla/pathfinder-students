import { ClusterKey } from "./clusters";

export type QuestionOption = {
    id : string;
    label : string;
    scores : Partial<Record<ClusterKey,number>>;
};

export type Question = {
    id : string;
    question : string;
    multiple : boolean;
    options : QuestionOption[];
};

export const questions: Question[] = [
    {
        id: "q1",
        question: "What kind of activities do you enjoy the most?",
        multiple: true,
        options: [
        {
            id: "logic",
            label: "Solving puzzles or logical problems",
            scores: { TECH: 2, RESEARCH: 1 },
        },
        {
            id: "creative",
            label: "Creating or designing things",
            scores: { DESIGN: 2, MEDIA: 1 },
        },
        {
            id: "helping",
            label: "Helping or taking care of people",
            scores: { HEALTH: 2, LAW: 1 },
        },
        {
            id: "leading",
            label: "Organizing or leading things",
            scores: { BUS: 2, LAW: 1 },
        },
        {
            id: "learning",
            label: "Learning how things work in detail",
            scores: { RESEARCH: 2, TECH: 1 },
        },
        ],
    },

    {
    id: "q2",
    question: "Which type of work sounds more interesting to you?",
    multiple: false,
    options: [
        {
        id: "data",
        label: "Working with numbers, data, or systems",
        scores: { TECH: 2, BUS: 1 },
        },
        {
        id: "people",
        label: "Working with people directly",
        scores: { HEALTH: 2, LAW: 1 },
        },
        {
        id: "ideas",
        label: "Working with ideas, writing, or creativity",
        scores: { MEDIA: 2, DESIGN: 1 },
        },
        {
        id: "hands-on",
        label: "Working with tools, machines, or hands-on tasks",
        scores: { VOC: 2, TECH: 1 },
        },
    ],
    },
    {
    id: "q3",
    question: "Which subjects do you enjoy?",
    multiple: true,
    options: [
        {
        id: "math",
        label: "Mathematics",
        scores: { TECH: 2, BUS: 1 },
        },
        {
        id: "science",
        label: "Science (Physics / Chemistry / Biology)",
        scores: { HEALTH: 2, RESEARCH: 1 },
        },
        {
        id: "computers",
        label: "Computers / Technology",
        scores: { TECH: 2 },
        },
        {
        id: "social",
        label: "Social Studies (History, Civics, Economics)",
        scores: { LAW: 2, BUS: 1 },
        },
        {
        id: "languages",
        label: "Languages / Writing",
        scores: { MEDIA: 2 },
        },
        {
        id: "arts",
        label: "Art / Design / Music",
        scores: { DESIGN: 2 },
        },
    ],
    },

    {
    id: "q4",
    question: "How do you prefer to solve problems?",
    multiple: false,
    options: [
        {
        id: "rules",
        label: "Step-by-step with clear rules",
        scores: { TECH: 2 },
        },
        {
        id: "experiment",
        label: "Experimenting and trying different approaches",
        scores: { DESIGN: 1, RESEARCH: 1 },
        },
        {
        id: "discuss",
        label: "Discussing with others and collaborating",
        scores: { BUS: 1, LAW: 1 },
        },
        {
        id: "observe",
        label: "Observing, researching, and understanding deeply",
        scores: { RESEARCH: 2 },
        },
    ],
    },

    {
    id: "q5",
    question: "What kind of impact feels more meaningful to you?",
    multiple: false,
    options: [
        {
        id: "people-impact",
        label: "Improving people’s lives directly",
        scores: { HEALTH: 2, LAW: 1 },
        },
        {
        id: "build",
        label: "Building useful products or systems",
        scores: { TECH: 2, BUS: 1 },
        },
        {
        id: "express",
        label: "Expressing ideas or creativity",
        scores: { DESIGN: 2, MEDIA: 1 },
        },
        {
        id: "society",
        label: "Influencing society, policy, or communities",
        scores: { LAW: 2 },
        },
    ],
    },

    {
    id: "q6",
    question: "Which statement sounds most like you?",
    multiple: false,
    options: [
        {
        id: "structure",
        label: "I like structure and clear expectations",
        scores: { TECH: 1, BUS: 1 },
        },
        {
        id: "freedom",
        label: "I like flexibility and freedom",
        scores: { DESIGN: 1, MEDIA: 1 },
        },
        {
        id: "stability",
        label: "I like stability and long-term security",
        scores: { HEALTH: 1, LAW: 1 },
        },
        {
        id: "growth",
        label: "I like challenges and fast growth",
        scores: { TECH: 1, BUS: 1 },
        },
    ],
    },

    {
    id: "q7",
    question: "Do you enjoy learning new skills on your own?",
    multiple: false,
    options: [
        {
        id: "yes",
        label: "Yes, a lot",
        scores: { TECH: 1, DESIGN: 1 },
        },
        {
        id: "sometimes",
        label: "Sometimes",
        scores: { BUS: 1 },
        },
        {
        id: "guided",
        label: "Not really, I prefer guided learning",
        scores: { HEALTH: 1, LAW: 1 },
        },
    ],
    },
    
    {
    id: "q8",
    question: "What would you rather do in your free time?",
    multiple: true,
    options: [
        {
        id: "coding",
        label: "Coding or building things",
        scores: { TECH: 2 },
        },
        {
        id: "reading",
        label: "Reading or researching",
        scores: { RESEARCH: 2 },
        },
        {
        id: "drawing",
        label: "Drawing or creating",
        scores: { DESIGN: 2 },
        },
        {
        id: "sports",
        label: "Sports or physical activities",
        scores: { VOC: 2 },
        },
        {
        id: "volunteer",
        label: "Volunteering or helping people",
        scores: { HEALTH: 2 },
        },
        {
        id: "planning",
        label: "Planning events or leading groups",
        scores: { BUS: 2 },
        },
    ],
    }
    ];

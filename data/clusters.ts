export type ClusterKey = 
    | "TECH"
    | "HEALTH"
    | "BUS"
    | "DESIGN"
    | "LAW"
    | "RESEARCH"
    | "MEDIA"
    | "VOC";

export type CareerCluster = {
    key : ClusterKey;
    title : String
    shortDescription : string;
}

export const careerClusters : Record<ClusterKey, CareerCluster> = {
    TECH:{
        key : "TECH",
        title : "Technology & Computing",
        shortDescription : 
        "Building systems, solving problems, and working with technology."
    },
    HEALTH: {
        key: "HEALTH",
        title: "Healthcare & Life Sciences",
        shortDescription:
        "Helping people and understanding health and life sciences.",
    },
    BUS: {
        key: "BUS",
        title: "Business, Management & Commerce",
        shortDescription:
        "Planning, organizing, and growing businesses and organizations.",
    },
    DESIGN: {
        key: "DESIGN",
        title: "Design & Creative Fields",
        shortDescription:
        "Creating, visual thinking, and expressing ideas through design.",
    },
    LAW: {
        key: "LAW",
        title: "Law, Policy & Public Service",
        shortDescription:
        "Working with justice, governance, and public systems.",
    },
    RESEARCH: {
        key: "RESEARCH",
        title: "Research & Academia",
        shortDescription:
        "Deep study, discovery, and creation of new knowledge.",
    },
    MEDIA: {
        key: "MEDIA",
        title: "Media, Writing & Communication",
        shortDescription:
        "Storytelling, writing, and communicating ideas to people.",
    },
    VOC: {
        key: "VOC",
        title: "Skilled & Vocational Careers",
        shortDescription:
        "Hands-on, practical, and skill-based career paths.",
    },
}
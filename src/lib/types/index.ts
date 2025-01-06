export type Skill = {
    tool: string;
    description: string;
    icon: string;
}

export type certificate = {
    name: string;
    link: string;
    icon: string;
}

export type Project = {
    id: string; // Unique identifier for the project
    name: string; // Name of the project
    description: string; // Description of the project
    date: string; // Date of the project in ISO format (e.g., YYYY-MM-DD)
    tools: string[]; // List of tools or technologies used in the project
    preview: string; // Link to the project preview (if available)
    source: string; // Link to the source code repository
    image: string; // Link to the project's image (if available)
    challenges: string[]; // List of challenges faced during the project
    solutions: string[]; // List of solutions implemented for the challenges
    outcome: string; // Outcome or results of the project
  };
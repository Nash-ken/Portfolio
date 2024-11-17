// place files you want to import through the `$lib` alias in this folder.
import LinkedIn from "lucide-svelte/icons/linkedin";
import Github from "lucide-svelte/icons/github";
import Message from "lucide-svelte/icons/quote";
import Send from "lucide-svelte/icons/send";
import Explore from "lucide-svelte/icons/compass";
import Projects from "lucide-svelte/icons/blocks";
import Career from "lucide-svelte/icons/briefcase";
import About from "lucide-svelte/icons/user";

export { LinkedIn, Github, Message, Send, Explore, Projects, Career, About };

import { slide } from "svelte/transition";
import { cubicInOut } from "svelte/easing";

export { slide, cubicInOut };

type Project = {
  id: string;
  name: string;
  description: string;
  date: string; // Format: YYYY-MM-DD
  tools: string[];
  preview: string;
  source: string;
  image: string;
  challenges: string[];
  solutions: string[];
  outcome: string;
};

type Job = {
  employer: string;
  role: string;
  description: string;
  date: [string, string];
  goals: string[];
};

export type { Project, Job };

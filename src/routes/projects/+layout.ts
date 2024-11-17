// src/routes/+layout.ts
import type { LayoutLoad } from "./$types";

// Cache data at module level
let projects: Map<string, any> | null = null;

export const load: LayoutLoad = async ({ fetch }) => {
  if (!projects) {
    const res = await fetch("/Json/projects.json");
    const jsonData = await res.json();

    // Convert the array to a Map where the key is the `id` from each project
    projects = new Map(
      jsonData.map((project: { id: string }) => [project.id, project])
    );
  }
  return { projects };
};

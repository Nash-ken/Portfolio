import type { LayoutLoad } from "./$types";
import type { Project } from "@types";
import { Length, Projects } from "@stores";
import { base } from "$app/paths";

export const load: LayoutLoad = async ({ fetch }) => {
    // If the store already has data, skip fetching
    if (Length() > 0) { return; }

    try {
        const res = await fetch(`${base}/fetch/projects.json`);
        
        if (!res.ok) {
            throw new Error(`Failed to fetch projects: ${res.status} ${res.statusText}`);
        }

        const projects: Project[] = await res.json();

        if (!Array.isArray(projects)) {
            throw new Error("Invalid data format: projects is not an array");
        }

        // Update the store
        Projects.set(projects);
    } catch (error) {
        // Narrow down error type for better logging
        if (error instanceof Error) {
            console.error(`${error.message}`);
        } else {
            console.error("An unknown error occurred while fetching projects");
        }
    }
};

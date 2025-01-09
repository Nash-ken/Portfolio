import { type Writable, writable, get } from "svelte/store";
import type { Project } from "@types";

export const projects: Writable<Project[]> = writable([]);

export function getProject(id: string): Project {
    const project = get(projects).find((project) => project.id === id);
    if (!project) {
        throw new Error(`Project with id ${id} not found`);
    }
    return project;
}

export function Length(): number {
    return get(projects).length;
}
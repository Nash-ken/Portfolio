// src/routes/+layout.ts
import type { LayoutLoad } from "./$types";
import type { Job } from "$lib";

// Cache data at module level
let experiences: Job[] | null = null; // Ensure it's explicitly typed as Job[]

export const load: LayoutLoad = async ({ fetch }) => {
  // Only fetch if experiences is null
  if (!experiences) {
    const res = await fetch("/Json/career.json");

    // Validate the response status
    if (!res.ok) {
      throw new Error("Failed to fetch career data");
    }

    const jsonData: Job[] = await res.json();

    // Assign the fetched and typed data to the cache
    experiences = jsonData;
  }

  // Return the cached data
  return { experiences };
};

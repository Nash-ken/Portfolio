<script lang="ts">
    import type { Project } from "@types";
    import { page } from "$app/state";
    let { project }: { project: Project } = $props();
    
</script>

<a href={`${page.url.pathname}/${project.id}`} class="flex flex-col h-64 rounded-lg border border-border overflow-hidden">
   <div class="overflow-hidden relative flex-grow flex items-center justify-center">
        <img src={project.image} alt={project.id} class="flex-grow h-full w-full object-cover" />
        <div class="absolute z-10 bottom-3 left-3 px-3 py-1 border border-border rounded-lg">
            {project.tools[0]}
        </div>
   </div>

   <div class="basis-1/3 bg-accent flex items-center px-6">
        <p class="text-text-muted font-semibold">{project.name}</p>
   </div>
</a>
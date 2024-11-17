<script lang="ts">
    import { page } from '$app/stores';
    import type { Project } from '$lib';
    let { project }: {project: Project} = $props();

    function gotoProject(id: string) {
        return $page.url.href.concat('/' + id);
    }
</script>

{#snippet Project(project: Project)}
   <a href={gotoProject(project.id)} class="border border-border rounded-lg">
    <div class="h-48 overflow-hidden relative">

        <div class="absolute text-sm w-fit h-fit rounded-md z-10 p-1.5 px-3 border border-border bottom-3 left-3">
            {project.tools[0]}
        </div>

        {#if project.image}
            <img src={project.image} alt="Project">
        {/if}
    </div>

    <div class="px-6 py-4 h-24 bg-accent">
        <h1 class="text-lg overflow-hidden text-ellipsis whitespace-nowrap">{project.name}</h1>
        <p class="text-sm text-text overflow-hidden text-ellipsis whitespace-nowrap">{project.description}</p>
    </div>
    </a>
{/snippet}

{@render Project(project)}
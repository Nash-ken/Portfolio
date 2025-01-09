<script lang="ts">
    import Icon from "@iconify/svelte";
    import { getProject } from "@stores";
    import type { Project } from "@types";
    import { base } from "$app/paths";

    let { data }: { data: { id : string} } = $props();

    let project: Project = getProject(data.id);

    const formattedDate = new Date(project.date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
</script>

<div class="content pb-24 pt-6 flex flex-col gap-4">
   <a href={`${base}/projects`} class="text-white">&leftarrow; All Projects</a>
   <h3 class="text-4xl lg:text-5xl text-white font-semibold">{project.name}</h3>
   <p class="text-text font-medium">{project.description}</p>

   <div class="flex text-sm gap-1 font-semibold">
    <p>{formattedDate}</p>

    {#each project.tools as tool}
        <div class="flex gap-1">
        • 
        {tool}
        </div>
    {/each}
   </div>

   <div class="w-full grid place-items-center aspect-video overflow-hidden rounded-md relative h-96 border-border border">
        <img src="" alt="Coming Soon">
    </div>

    <div class="bg-accent border border-border rounded-md p-6 flex flex-col desktop:flex-row w-full desktop:justify-between items-center desktop:gap-0 gap-4">
        <div class="w-full">
           <p class="text-sm text-white">Preview & Source</p>
           <p class="text-text font-medium text-xs">Want to see the Project and how it was made?</p>
        </div>
        <div class="flex flex-col text-white w-full desktop:flex-row items-center gap-2 desktop:gap-3">
            {#if project.preview}
                <a class="block w-full" target="_blank" href={project.preview}><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary border-borderalt border shadow hover:opacity-[0.64] transition-all duration-300 h-9 px-4 py-2 w-full">Preview</button></a>
            {/if}

            {#if project.source}
            <a class="block w-full" target="_blank" href={project.source}><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary border-primary border shadow-sm hover:bg-secondary/80 transition-all duration-300 h-9 px-4 py-2 w-full">Source</button></a>
            {/if}
            
           
        </div>
    </div>

        <p class="text-white"><strong>Challenge</strong></p>
        {#each project.challenges as challenge, index}
            <div class="flex gap-3 border-l-2 border-primary px-3">
                <p class="text-white">{index + 1}</p>
                <p>{challenge}</p>
            </div>
        {/each}


        <p class="text-white"><strong>Solution</strong></p>
        {#each project.solutions as solution, index}
        <div class="flex gap-3 px-3 border-l-2 border-primary">
            <p class="text-white">{index + 1}</p>
            <p>{solution}</p>
        </div>
        {/each}
       
        <div class="flex flex-col gap-1 mt-3">
            <p class="text-white"><strong>Outcome</strong></p>
            <p class="text-text">{project.outcome}</p>
        </div>
       

        <div class="grid grid-cols-1 desktop:grid-cols-2 gap-6 mt-6">
            <div class="rounded-xl border border-border bg-accent text-text shadow w-full">
             <div class="p-6 space-y-6 relative overflow-hidden z-20">
                 <div class="size-10 rounded-full bg-primary border border-border text-white flex items-center justify-center"><Icon icon="lucide:briefcase" /></div>
                 <div>
                     <h3 class="font-medium text-lg text-white">Experience</h3>
                     <p class=" text-text font-medium text-xs">View my Career History.</p>
                 </div>
                 <a href={`${base}/career`} class="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary border-borderalt border text-white shadow hover:opacity-[0.64] transition-all duration-300 h-8 rounded-md px-3 text-xs">
                     Experience
                 </a>
             </div>
            </div>
            <!--Divider-->
            <div class="rounded-xl border border-border bg-accent text-text shadow w-full">
             <div class="p-6 space-y-6 relative overflow-hidden z-20">
                 <div class="size-10 rounded-full bg-primary border border-border text-white flex items-center justify-center"><Icon icon="lucide:user" /></div>
                 <div>
                     <h3 class="font-medium text-lg text-white">About Me</h3>
                     <p class=" text-text font-medium text-xs">Want to know more about me?</p>
                 </div>
                 <a href={`${base}/about`} class="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary border-borderalt border text-white shadow hover:opacity-[0.64] transition-all duration-300 h-8 rounded-md px-3 text-xs">
                     About
                 </a>
             </div>
            </div>
         </div>
</div>
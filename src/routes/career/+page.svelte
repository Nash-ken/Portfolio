<script lang="ts">
  import Main from "$lib/Components/Main/Main.svelte";
  import type { Job } from "$lib";
  let { data } = $props();
  let employments: Job[] = data.experiences;
    
  
 

  function formattedDate(date: string) {
    return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
  } 
</script>

{#snippet employment(job: Job)}
    <div class=" space-y-2">
        <h3 class="text-xl font-bold">{job.employer}</h3>
        <div class="flex items-center gap-1 text-text text-sm">
            <h5>{job.role},</h5>
            <div class="flex items-center gap-1 text-sm text-text">
                <p>{formattedDate(job.date[0])}</p>
                -
                <p>{job.date[1]}</p>
            </div>
        </div>
       
       

        <ul class="list-disc ml-6 text-sm text-text">
            {#each job.goals as goal}
                <li class="">{@html goal}</li>
            {/each}
        </ul>
    </div>
{/snippet}




<Main>
    <div class="space-y-2">
        <h1 class="text-4xl font-semibold tracking-tighter md:text-5xl/tight">Career</h1>
        <p class="max-w-[600px] text-text md:text-xl/relaxed desktop:text-base/relaxed xl:text-xl/relaxed">View my previous employments, experience and professional contributions.</p>
    </div>

    {#if employments && employments.length > 0}
        {#each employments as job}
            {@render employment(job)}
        {/each}
    {:else}
        <h1 class="text-center text-text font-medium underline">Currently looking for employment.</h1>
    {/if}
    
</Main>


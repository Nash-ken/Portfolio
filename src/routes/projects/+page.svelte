<script lang="ts">
    import { Projects } from "@stores";
    import { Project } from "@ui";
</script>


<div class="content flex flex-col gap-1 mt-6">
    <h1 class="text-4xl text-white lg:text-5xl font-semibold">Projects</h1>
    <p class="text-text">See my creations come to life.</p>
</div>

<div class="content pb-24 mt-12 grid grid-cols-1 gap-6 desktop:grid-cols-2">
  
    {#each $Projects as project}
        <Project {project} />
    {/each}
</div>
<script>
  import Main from "$lib/Components/Main/Main.svelte";
  import Project from "$lib/Components/Projects/Project.svelte";

  let { data } = $props();

 
</script>


<Main>
    <div class="flex flex-col space-y-2">
      <h1 class="text-4xl lg:text-5xl font-semibold">Projects</h1>
      <p class="text-text">See my creations come to life.</p>
    </div>


    <div class="grid grid-cols-1 gap-6 desktop:grid-cols-2">
      {#each data.projects.values() as project}
        <Project {project} />
      {/each}
    </div>
   

</Main>
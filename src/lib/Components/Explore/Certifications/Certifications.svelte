<script lang="ts">
    import { certifications } from './Certification';
</script>

{#snippet Certification(name: string, link: string, icon: string)}
<a href={link} class="border border-border rounded-md p-2 flex justify-start items-center space-x-4 hover:opacity-[0.64] transition-all duration-300">
    <div class="bg-accent rounded-md size-10 text-textalt flex items-center justify-center">
        {@html icon}
    </div>
    <p>{name}</p>
</a>
{/snippet}


<div class="space-y-4">
    <h3 class="font-semibold text-lg">Certifications</h3>
    <div class="grid grid-cols-1 desktop:grid-cols-2 gap-2">
       {#each certifications as {name, link, icon}}
        {@render Certification(name, link, icon)}
       {/each}
    </div>
</div>
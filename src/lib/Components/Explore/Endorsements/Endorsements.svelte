<script lang="ts">
    import { Message } from '$lib';
</script>

{#snippet Endorsement(person: string, reply: string)}
<div class="bg-accent border border-border rounded-md p-6 flex-1 space-y-6">
    <div class="size-10 rounded-full flex justify-center items-center bg-primary"><Message size="18"/></div> 
    <div class="flex flex-col space-y-2">
        <h1 class="font-medium text-white">{person}</h1>
        <p class="text-sm font-medium">{reply}</p>
    </div>
</div>
{/snippet}


<div class="space-y-4">
    <h3 class="text-lg font-semibold">Endorsements</h3>
    <div class="flex flex-col desktop:flex-row gap-3 text-text">
        {@render Endorsement("Previous Employer", 'Noel is enthusiastic, polite, and friendly, with a strong drive to learn new things daily.', )}
        {@render Endorsement("Previous Employer",  'A true team player, Noel is praised by managers for his high standards and is always a pleasure to work with.', )}
    </div>
</div>
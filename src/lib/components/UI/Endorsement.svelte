<script lang="ts">
    import Icon from "@iconify/svelte";
    let { message } : { message: string } = $props();
</script>

<div class="bg-accent border border-border rounded-md p-6 flex-1 space-y-6">
    <div class="size-10 rounded-full flex justify-center items-center bg-primary"><Icon icon="lucide:quote" /></div> 
    <div class="flex flex-col space-y-2">
        <h1 class="font-medium text-white">Previous Employer</h1>
        <p class="text-sm font-medium">{message}</p>
    </div>
</div>
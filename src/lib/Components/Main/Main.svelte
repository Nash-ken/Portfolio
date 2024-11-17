<script lang="ts">
    import type { Snippet } from "svelte";
    let { children }: {children: Snippet} = $props();
</script>

<main class="w-full max-w-desktop mx-auto px-4 pt-4 pb-24 space-y-8 custom-scrollbar">
    {@render children()}
</main>
<script lang="ts">
    import { page } from '$app/state';
    import Icon from '@iconify/svelte';
    import { cubicInOut } from 'svelte/easing';
    import { slide } from 'svelte/transition';

    let { mobile } : { mobile: boolean } = $props();
    let currentPath: string = $derived(page.url.pathname);

    const pages = [
        {page: 'Explore', path: '/', icon: "lucide:compass"},
        {page: 'Projects', path: '/projects', icon: "lucide:blocks"},
        {page: 'Career', path: '/career', icon: "lucide:briefcase"},
        {page: 'About', path: '/about', icon: "lucide:user"}
    ];
    
    function isActive(path: string) {
		return path === currentPath;
	}
</script>

<nav class="text-white ml-auto">
    {#if !mobile}
        {@render Top()}
    {:else}
        {@render Bottom()}
    {/if}
</nav>


{#snippet Top()}
    <div class="flex gap-3 items-center">
        {#each pages as page}
            <a class="flex items-center text-white" href={page.path}>
            <div class="flex items-center justify-center whitespace-nowrap h-9 w-9 rounded-md bg-secondary"><Icon icon={page.icon} width="16" height="16" /></div>
            {#if isActive(page.path)}
                <p class="bg-accent flex items-center h-9 rounded-r-md text-white" transition:slide={{axis:'x', duration: 300, easing: cubicInOut}} > <span class="px-3"> {page.page}</span></p>
            {/if}
            </a>
        {/each}
    </div>
{/snippet}

{#snippet Bottom()}
    <div class="z-50 fixed bottom-0 left-0 right-0 h-20 bg-accent border-border border-t px-4 py-4 grid grid-cols-4 grid-rows-1 gap-0.5 place-items-center">
        {#each pages as {page, path, icon}}
            <a href={path} class={`grid place-items-center  rounded-md h-14 w-full transition-colors duration-300`} class:active={isActive(path)}>
                <div class={`flex flex-col items-center justify-center gap-1`}>
                    <Icon icon={icon} />
                    <p class="text-xs font-semibold">{page}</p>
                </div>
            </a>
        {/each}
    </div>
{/snippet}


<style>
    a.active {
        background-color: theme('colors.primary');
        color: white;
        
    }

    a:not(.active) {
        color: theme('colors.text');
    }
</style>
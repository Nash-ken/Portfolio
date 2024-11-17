<script lang="ts">
    import { page } from "$app/stores";
    import { slide, cubicInOut, Explore, Projects,Career,About, Send } from "$lib";

    let { clientWidth, scrollY }: {clientWidth: number, scrollY:number} = $props();
    let mobile: boolean = $derived(clientWidth <= 900);
    let scrolled: boolean = $derived(scrollY > 10);
    let currentPath: string = $derived($page.url.pathname);

    const pages = [
        {page: 'Explore', path: '/', Icon: Explore},
        {page: 'Projects', path: '/projects', Icon: Projects},
        {page: 'Career', path: '/career', Icon: Career},
        {page: 'About', path: '/about', Icon: About}
    ];

    function isActive(path: string) {
		return path === '/' ? currentPath === '/' : currentPath.startsWith(path);
	}
</script>

{#snippet Top()}
<nav class={`flex gap-3 px-4 items-center justify-between w-full max-w-desktop mx-auto transition-all duration-300  ${scrolled ? 'detatch' : 'default'}`}>
    <div class="flex h-full items-center gap-3">
		<span
			class="relative flex shrink-0 overflow-hidden rounded-full transition-all duration-500 size-11"
		></span>
		<div
			class="leading-5 transition-all duration-500 min-w-max opacity-100 h-full flex justify-center flex-col"
		>
			<p class="font-semibold">Noel Aczel</p>
			<p class="text-text font-medium text-xs">Developer/Security</p>
		</div>
	</div>

    {#if !mobile}
    <div class="flex gap-3 ml-auto items-center">
        {#each pages as page}
            <a class="flex items-center " href={page.path}>

                <div class="flex items-center justify-center whitespace-nowrap h-9 w-9 rounded-md bg-secondary"><page.Icon size="16" /></div>
                {#if isActive(page.path)}
                    <p class="flex justify-center items-center px-3 bg-accent h-9 rounded-r-md" transition:slide={{axis:'x', duration: 200, easing: cubicInOut}} >{page.page}</p>
                {/if}

            
            </a>
        {/each}
    </div>
    {/if}
    <a class="flex items-center justify-center whitespace-nowrap h-9 w-9 rounded-md bg-secondary" href="/contact"><Send size="16" /></a>
</nav>
{/snippet}


{#snippet Bottom()}
    {#if mobile}
    <nav class="z-50 fixed bottom-0 left-0 right-0 h-20 bg-accent border-border border-t px-4 py-2 grid grid-cols-4 grid-rows-1 gap-0.5 place-items-center">
        {#each pages as {page, path, Icon}}
            <a href={path} class={`grid place-items-center text-text rounded-md h-14 w-full transition-colors duration-300 ${isActive(path) ? 'active' : ''}`}>
                <div class={`flex flex-col items-center justify-center gap-1`}>
                    <Icon size="20" />
                    <p class="text-xs font-semibold">{page}</p>
                </div>
            </a>
        {/each}
    </nav>
    {/if}
{/snippet}


{@render Top()}
{@render Bottom()}


<style>
    .detatch {
        @apply bg-accent desktop:bg-background border border-border desktop:border-transparent shadow-sm sticky h-16 top-0 z-50 origin-top;
    }

    .default {
        @apply bg-background border border-transparent shadow-sm relative h-20;
    }

    .active {
        @apply bg-primary text-inherit;
    }
</style>
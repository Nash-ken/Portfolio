<script lang="ts">
    import Icon from "@iconify/svelte";
    import { Navigation } from "@layout";
    let scrollY: number = $state(0);
    let outerWidth: number = $state(0);
    let minimize: boolean = $derived(scrollY > 0 && outerWidth < 900);
</script>

<svelte:window bind:scrollY={scrollY} bind:outerWidth={outerWidth} />

<header class={minimize ? "minimize" : ""}>
  <div class="content flex justify-start items-center gap-4">
    <div class="size-10 grid place-items-center">
        N
    </div>

    <div class="leading-5 transition-all duration-500 min-w-max opacity-100 h-full flex justify-center flex-col">
        <h1 class="font-semibold text-white">Noel Aczel</h1>
		<h3 class="text-text font-semibold text-xs">Developer/Security</h3>
    </div>


    <Navigation mobile={outerWidth < 900} />
    <a href="#" class="flex items-center justify-center whitespace-nowrap h-9 w-9 rounded-md text-white bg-secondary"><Icon icon="lucide:send" width="16" height="16" /></a>
   

  </div>
</header>


<style lang="postcss">
    header.minimize {
        height: 4rem;
        z-index: 50;
        position: sticky;
        top: 0;
        background-color: theme(colors.accent);
        border-bottom: 1px solid theme(colors.border);
    }
    
    header {
        width: 100vw;
        height: 5rem;
        background-color: theme(colors.background);
        border-bottom: 1px solid theme(colors.transparent);
        transition: all 300ms;
  }
</style>
  
  
<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/Components/Navigation/Navigation.svelte';
	//local variables
	let { children } = $props();
	let clientWidth: number = $state(0);
	let scrollY: number = $state(0);
</script>

<svelte:window bind:innerWidth={clientWidth} bind:scrollY={scrollY} />

<Navigation  {clientWidth} {scrollY} />
{@render children()}

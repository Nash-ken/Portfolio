<script lang="ts">
	import '../app.css';
	// Supports weights 200-800
	import '@fontsource-variable/plus-jakarta-sans';
	import { Header } from "@layout";
	let { children } = $props();
</script>

<Header />
{@render children()}

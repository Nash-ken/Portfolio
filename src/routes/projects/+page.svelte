<script lang="ts">
    import { base } from "$app/paths";
    import { page } from "$app/state";

    let b = $derived(base + page.url.pathname);
</script>

<p>dssffd{b}</p>
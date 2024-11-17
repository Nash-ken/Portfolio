<script lang="ts">
    import { security, development } from "./stack";
    import type { List } from "./stack";
</script>


{#snippet Category(category: string, list: List[])}
<section class="flex-1 flex flex-col space-y-4">
	<h1 class="font-medium text-md">{category}</h1>

	<ul class="flex flex-col gap-3">
		{#each list as item}
			<li class="flex items-center gap-3">
				<div class="size-12 flex items-center justify-center rounded-md bg-accent">
					{@html item.icon}
				</div>
				<div class="flex flex-col justify-center font-medium">
					<h1 class="text-sm font-medium">{item.tool}</h1>
					<p class="text-text text-xs">{item.description}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>
{/snippet}

<div class="border border-border text-card-foreground shadow bg-background p-6 rounded-md space-y-4">
    <div class="flex flex-col space-y-2">
        <h3 class="text-lg font-semibold">Skills</h3>
        <p class="text-text">My Tools, Resources and Software.</p>
    </div>

    <div class="flex flex-col desktop:flex-row gap-6">
        {@render Category("Security", security)}
        {@render Category("Development", development)}
    </div>
   
</div>
<script lang="ts">
	import { roadMapItems } from '../data/roadMapItems.js';
	import type { RoadMapItemType } from '../data/roadMapItems.js';

	const inProgressItems = roadMapItems.filter((rm) => rm.status === 'In Progress');
	const plannedItems = roadMapItems.filter((rm) => rm.status === 'Planned');
	const doneItems = roadMapItems.filter((rm) => rm.status === 'Done');
</script>

{#snippet roadMapCard(roadMapItem: RoadMapItemType)}
	<div class=" ">
		<h3 class="font-medium">{roadMapItem.name}</h3>
		<div>
			{#if roadMapItem.releaseVersion}
				<p class="inline rounded-md border-2 border-green-300 p-1 text-[10px]">
					{roadMapItem.releaseVersion}
				</p>
			{/if}
		</div>
		<p>{roadMapItem.description}</p>
	</div>
{/snippet}

<div class="grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-3">
	<div class=" col-span-1">
		<h2 class="text-lg font-semibold">In Progress</h2>
	</div>
	<div class="col-span-2 grid grid-cols-1 gap-2 gap-y-4 p-1 md:grid-cols-2">
		{#each inProgressItems as inProgressItem}
			{@render roadMapCard(inProgressItem)}
		{/each}
	</div>
	<div class=" col-span-1">
		<h2 class="text-lg font-semibold">Planned</h2>
	</div>
	<div class="col-span-2 grid grid-cols-2 gap-2 p-1">
		{#each plannedItems as plannedItem}
			{@render roadMapCard(plannedItem)}
		{/each}
	</div>
	<div class=" col-span-1">
		<h2 class="text-lg font-semibold">Done</h2>
	</div>
	<div class="col-span-2 grid grid-cols-2 gap-2 p-1">
		{#each doneItems as doneItems}
			{@render roadMapCard(doneItems)}
		{/each}
	</div>
</div>

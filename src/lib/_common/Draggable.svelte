<script lang="ts">
	import { assignLocationToPrinter } from '$lib/_services/printer.service';
	import printersStore, { printerDragged } from '$lib/_stores/printers.store';
	import { createEventDispatcher } from 'svelte';

	export let entity: any;

	$: innerWidth = 0;
	$: canDrag = innerWidth > 768;

	const dispatchEvent = createEventDispatcher();

	const handleAssignClick = (e: any) => {
		dispatchEvent('assignClick', entity);
	};

	const handleDrag = (e: any) => {
		e.dataTransfer.dropEffect = 'move';
		$printerDragged = entity;
	};
</script>

<svelte:window bind:innerWidth />
<div class="flex justify-between" on:dragstart={handleDrag} draggable={canDrag}>
	<slot />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="bg-white rounded-lg px-4 py-2 w-20 text-green-700 font-semibold md:hidden"
		on:click={handleAssignClick}
	>
		Assign
	</div>
</div>

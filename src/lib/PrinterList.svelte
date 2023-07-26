<script lang="ts">
	import { onMount } from 'svelte';
	import printersStore from './_stores/printers.store';
	import { getPrinters } from './_services/printer.service';
	import Pane from './_common/Pane.svelte';
	import Draggable from './_common/Draggable.svelte';
	import { getLocationNameFromId } from './_services/location.service';

	$: printerList = $printersStore;

	onMount(() => {
		populatePrinterList();
	});

	const populatePrinterList = () => {
		printersStore.setPrinterList(getPrinters());
	};
</script>

<div>
	{#each printerList as printer}
		<Pane class="mb-4 cursor-pointer hover:bg-gray-100 hover:font-semibold">
			<Draggable entity={printer} on:assignClick>
				{printer.label}
				<br />
				{#if printer.locationId}
					Location: {getLocationNameFromId(printer.locationId)}
				{/if}
			</Draggable>
		</Pane>
	{/each}
</div>

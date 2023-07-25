<script lang="ts">
	import { onMount } from 'svelte';
	import Pane from './_common/Pane.svelte';
	import type { Location } from './_types/location.type';
	import { getLocations } from './_services/location.service';
	import locationsStore from './_stores/locations.store';

	import { createEventDispatcher } from 'svelte';
	import { assignLocationToPrinter, getPrinters } from './_services/printer.service';
	import printersStore, { printerDragged } from './_stores/printers.store';

	const dispatchEvent = createEventDispatcher();

	let locationList = Array<Location>();

	onMount(() => {
		populateLocationList();
	});

	const populateLocationList = () => {
		let locations = getLocations();
		locationsStore.setLocationList(locations);
		locationList = locations;
	};

	const handleLocationClick = (loc: any) => {
		dispatchEvent('locationClick', loc);
	};

	const handleDrop = (loc: any) => {
		let prtr: any = $printerDragged;
		assignLocationToPrinter(prtr, loc.id);
		printersStore.setPrinterList(getPrinters());
	};
</script>

<div>
	{#each locationList as location}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => handleLocationClick(location)}
			id={'loc-' + location.id}
			on:drop={() => handleDrop(location)}
			on:dragover={(ev) => {
				ev.preventDefault();
			}}
		>
			<Pane class="mb-4">
				{location.label}
			</Pane>
		</div>
	{/each}
</div>

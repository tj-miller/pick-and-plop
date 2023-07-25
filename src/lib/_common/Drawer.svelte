<script lang="ts">
	import LocationList from '$lib/LocationList.svelte';
	import { assignLocationToPrinter, getPrinters } from '$lib/_services/printer.service';
	import { drawerData, drawerStore } from '$lib/_stores/drawer.store';
	import printersStore from '$lib/_stores/printers.store';
	import { slide } from 'svelte/transition';

	let handleDrawerClose = () => {
		$drawerStore = false;
	};

	let handleLocationClick = (e: any) => {
		assignLocationToPrinter($drawerData, e.detail.id);
		printersStore.setPrinterList(getPrinters());
		handleDrawerClose();
	};
</script>

{#if $drawerStore}
	<div
		in:slide={{ axis: 'x', duration: 400 }}
		out:slide={{ axis: 'x', duration: 400 }}
		class="absolute h-screen w-screen top-0 right-0 transition-all ease-in-out bg-white"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={handleDrawerClose} class="flex justify-end text-2xl pr-6 pt-6 cursor-pointer">
			X
		</div>

		<LocationList on:locationClick={handleLocationClick} />
	</div>
{/if}

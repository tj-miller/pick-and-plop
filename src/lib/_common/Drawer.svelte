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
		class="absolute h-screen w-11/12 top-0 right-0 transition-all ease-in-out bg-white px-4 shadow-lg"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={handleDrawerClose}
			class="flex justify-end text-xl pr-0 pt-4 pb-2 cursor-pointer"
		>
			<i class="fa-solid fa-x" />
		</div>
		<div class="text-lg w-full text-center pb-4">Choose a location:</div>

		<LocationList on:locationClick={handleLocationClick} />
	</div>
{/if}

<script lang="ts">
	import LocationList from '$lib/LocationList.svelte';
	import Login from '$lib/Login.svelte';
	import PrinterList from '$lib/PrinterList.svelte';
	import Drawer from '$lib/_common/Drawer.svelte';
	import { drawerStore, drawerData } from '$lib/_stores/drawer.store';

	let handleAssignClick = (e: any) => {
		let printerChosen = e.detail;
		console.dir(printerChosen);
		$drawerStore = true;
		$drawerData = e.detail;
	};
</script>

<div class="w-screen h-screen flex justify-center gap-5 my-20">
	<div class="border-black border-2 border-solid flex flex-col p-4 w-full md:w-1/3">
		<h3>Printer List</h3>
		<PrinterList on:assignClick={handleAssignClick} />
	</div>
	<div class="border-black border-2 border-solid md:w-1/3 hidden flex-col p-4 md:flex">
		<h3>Location List</h3>
		<LocationList />
	</div>
</div>
<Drawer />

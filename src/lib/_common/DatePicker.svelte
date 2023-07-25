<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from '../_services/i18n.service';

	// This date picker could be fancier but this gets the job done for now
	export let value: any;

	let picker: any;

	onMount(() => {
		// set the picker min selection to tomorrow
		const today = new Date();
		const tomorrow = new Date(today);
		tomorrow.setDate(tomorrow.getDate() + 1);
		picker.min = tomorrow.toISOString().split('T')[0];
	});
</script>

<div class="flex flex-col max-w-[150px] mt-4">
	<label class="font-semibold" for="picker">{$_('common.date')}</label>
	<input id="picker" type="date" bind:value bind:this={picker} />
</div>

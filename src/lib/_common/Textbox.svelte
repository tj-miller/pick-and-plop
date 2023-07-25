<script lang="ts">
	import { onMount } from 'svelte';

	export let value: string;
	export let label: string = 'Label';
	export let placeholder: string = '';
	export let testid: string = '';
	export let type: 'text' | 'password' = 'text';
	export let isInvalid: boolean = false;
	export let required: boolean = false;
	let classList: string = '';
	let inputElement: any;
	export { classList as class };

	onMount(() => {
		//required to dynamically change the input type on mount since it's 2 way binding
		inputElement.type = type;
	});
</script>

<div class={`flex flex-col ${classList}`} data-testid={testid}>
	<div class="flex">
		<label for="inputText" data-testid={`${testid}-lbl`} class:text-red-500={isInvalid}
			>{label}</label
		>
		{#if required}
			<span class="pl-1" class:text-red-500={isInvalid}>*</span>
		{/if}
	</div>
	<input
		bind:this={inputElement}
		{placeholder}
		bind:value
		class="border border-gray-700 rounded"
		class:border-red-500={isInvalid}
		id="inputText"
		data-testid={`${testid}-input`}
	/>
</div>

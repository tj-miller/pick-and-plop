<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatchEvent = createEventDispatcher();

	const handleClick = () => {
		dispatchEvent('click');
	};
</script>

<div>
	<button
		class="bg-green-400 text-white font-semibold text-xl px-4 py-2 rounded-xl hover:bg-green-500 drop-shadow-sm"
		on:click={handleClick}
	>
		<slot />
	</button>
</div>

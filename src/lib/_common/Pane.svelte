<script lang="ts">
	let classList: string = '';
	export { classList as class };
</script>

<div class={`p-6 rounded-lg drop-shadow-md bg-gray-200 flex flex-col ${classList}`}>
	<slot />
</div>

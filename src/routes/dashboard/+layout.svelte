<script>
	import { goto } from '$app/navigation';
	import cookieStore from '$lib/_stores/cookie.store';
	import { onMount } from 'svelte';

	onMount(() => {
		let jwt = cookieStore.getJwt();
		if (!jwt) {
			goto('/');
		}
	});
</script>

<slot />

<script lang="ts">
	import { _ } from './_services/i18n.service';
	import DatePicker from './_common/DatePicker.svelte';
	import Heading from './_common/Heading.svelte';
	import Pane from './_common/Pane.svelte';

	let selectedDate: any;
</script>

<Pane class="mt-4 md:max-w-2xl w-full bg-slate-100 border border-black">
	<Heading>
		{$_('dashboard.title')}
	</Heading>
	<DatePicker bind:value={selectedDate} />
</Pane>

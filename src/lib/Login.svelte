<script>
	import { _ } from './_services/i18n.service';
	import Heading from './_common/Heading.svelte';
	import Pane from './_common/Pane.svelte';
	import Subheading from './_common/Subheading.svelte';
	import LoginForm from './_forms/LoginForm.svelte';
</script>

<div class="flex flex-col w-full h-full justify-center items-center">
	<Heading>
		{$_('login.welcome')}
	</Heading>
	<Subheading>
		{$_('login.loginInstructions')}
	</Subheading>
	<Pane class="mt-4 md:max-w-lg w-full">
		<LoginForm />
	</Pane>
</div>

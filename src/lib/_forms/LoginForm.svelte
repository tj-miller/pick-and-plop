<script lang="ts">
	import PrimaryButton from '$lib/_common/PrimaryButton.svelte';
	import Textbox from '$lib/_common/Textbox.svelte';
	import { _ } from '../_services/i18n.service';
	import * as yup from 'yup';
	import { Form, isInvalid } from 'svelte-yup';
	import ErrorText from '$lib/_common/ErrorText.svelte';
	import { login } from '$lib/_services/auth.service';
	import cookieStore from '$lib/_stores/cookie.store';
	import { goto } from '$app/navigation';

	$: invalid = (name: any) => {
		if (submitted) {
			return isInvalid(schema, name, loginFormData);
		}
		return false;
	};

	let loginFormData = {
		username: '',
		password: ''
	};

	// set up Yup schema to do form validation
	let schema = yup.object().shape({
		username: yup.string().required(),
		password: yup.string().required()
	});

	let isValid;
	let submitted = false;
	let message: string;

	const handleLoginClick = () => {
		submitted = true;
		message = '';

		isValid = schema.isValidSync(loginFormData);
		if (isValid) {
			attemptLogin();
		} else {
			//if there are errors, highlight the correct fields and display a message
			message = $_('login.error');
		}
	};

	const attemptLogin = async () => {
		let res = await login(loginFormData.username, loginFormData.password);
		if (res.accessToken) {
			cookieStore.saveJwt(res.accessToken);
			goto('/dashboard');
		} else {
			message = $_('login.invalid');
		}
	};
</script>

<Form {schema} fields={loginFormData}>
	<Textbox
		label={$_('login.username')}
		bind:value={loginFormData.username}
		isInvalid={invalid('username')}
		required={true}
	/>
	<Textbox
		label={$_('login.password')}
		bind:value={loginFormData.password}
		class="mt-4"
		type="password"
		isInvalid={invalid('password')}
		required={true}
	/>
	<div class="mt-4 w-full flex justify-center">
		<PrimaryButton on:click={handleLoginClick}>
			{$_('login.loginBtn')}
		</PrimaryButton>
	</div>
</Form>
{#if message}
	<div class="w-full flex justify-center absolute bottom-0 left-0">
		<ErrorText>
			{message}
		</ErrorText>
	</div>
{/if}

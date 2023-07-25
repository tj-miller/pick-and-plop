<script>
	import { setupI18n } from '../lib/_services/i18n.service';
	import '../app.css';

	//set up internationalization for strings in app
	setupI18n();
</script>

<div class="flex flex-col h-screen w-screen">
	<slot />
</div>

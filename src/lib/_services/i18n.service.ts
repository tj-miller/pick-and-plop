import { enLocale } from '../../locales/en-US';
import { dictionary, _, number, date, getLocaleFromNavigator, init } from 'svelte-i18n';

// Sets up internationalization defaulting to US english
function setupI18n() {
	dictionary.set({
		'en-US': enLocale,
		// Add more locale files as more languages are needed
	});

    //set defaults
    init({
        fallbackLocale: "en-US",
        initialLocale: getLocaleFromNavigator()
    });

}
export { _, setupI18n, number, date };

import { writable } from 'svelte/store';

function getJwt() {
	const regex = new RegExp('jwt=([\\w.-]+)', 'ig');
	const match = regex.exec(document.cookie);
	if (match == null || match.length <= 1) {
		console.log('JWT not set');
		return null;
	}
	const jwt = match[1];
	cookieStore.update((store) => {
		store.jwt = jwt;
		return store;
	});
	return jwt;
}

function saveJwt(jwt: string) {
	document.cookie = `jwt=${jwt}; path=/; max-age=${60 * 60 * 24 * 90}`;
	cookieStore.update((store) => {
		store.jwt = jwt;
		return store;
	});
	return jwt;
}


const cookieStore = writable({
	jwt: '',
});

export default {
	saveJwt: saveJwt,
	getJwt: getJwt,
	...cookieStore
};

import type { Location } from '$lib/_types/location.type';
import { writable } from 'svelte/store';
const locationStore = writable(Array<Location>);
function setLocationList(locs: any) {
    locationStore.set(locs);
}

export default {
    setLocationList,
	...locationStore
};
import { writable } from 'svelte/store';
const drawerStore = writable(false);
const drawerData = writable({});

export { drawerStore, drawerData }
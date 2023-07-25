import type { Printer } from '$lib/_types/printer.type';
import { writable } from 'svelte/store';
const printerListStore = writable(Array<any>());
export const printerDragged = writable({});
function setPrinterList(printers: Array<any>) {
    printerListStore.set(printers);
}

export default {
    setPrinterList,
	...printerListStore,
    printerDragged
};
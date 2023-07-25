import type { Printer } from "$lib/_types/printer.type";

let printers = new Array<Printer>();
printers = [
    {
        id: 123,
        label: 'Printer A',
        ip: '2.134.8.87',
        locationId: undefined
    },
    {
        id: 456,
        label: 'Printer B',
        ip: '2.134.8.88',
        locationId: undefined
    },
    {
        id: 789,
        label: 'Printer C',
        ip: '2.134.8.89',
        locationId: undefined
    },
    {
        id: 1,
        label: 'Printer D',
        ip: '2.134.8.90',
        locationId: undefined
    }                
];

function getPrinters() {
    return printers;
}

function assignLocationToPrinter(printer: any, locationId: any) {
    let printerIndex = printers.findIndex((p) => p.id == printer.id);
    printers[printerIndex].locationId = locationId;
}

export { getPrinters, assignLocationToPrinter };
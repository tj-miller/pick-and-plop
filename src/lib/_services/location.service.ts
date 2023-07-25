import type { Location } from "$lib/_types/location.type";

function getLocations() {
    let locations = new Array<Location>();
    locations = [
        {
            id: 111,
            label: 'Location A'
        },
        {
            id: 222,
            label: 'Location B'
        },
        {
            id: 333,
            label: 'Location C'
        },
        {
            id: 444,
            label: 'Location D'
        }                
    ];

    return locations;
}

function getLocationNameFromId(locId: number) {
    return getLocations().find((loc) => loc.id == locId)?.label;

}

export { getLocations, getLocationNameFromId };
// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

const getDrumName = (name) => {
    switch (name) {
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return;
    }
};

const toggleDrum = (drumArrayName, index) => {
    if (!drumArrayName || index < 0 || index > 15) {
        return;
    }
    const drums = getDrumName(drumArrayName);
    drums[index] = !drums[index];
    //console.log(drums);
};

const clear = (drumArrayName) => {
    const drums = getDrumName(drumArrayName);
    if (drums) {
        drums.fill(false);
    }
};

const invert = (drumArrayName) => {
    const drums = getDrumName(drumArrayName);
    if (!drums) {
        return;
    }
    for (let i=0; i < drums.length; i++) {
        drums[i] = !drums[i];
        //console.log(drums[i]);
    }
};

const getNeighborPads = (x, y, size) => {
    const neighborPads =[];
    if (x < 0 || y < 0 || size < 1 || x >= size || y >= size) {
        return [];
    }

    neighborPads.push([x - 1, y]);
    neighborPads.push([x, y - 1]);
    neighborPads.push([x + 1, y]);
    neighborPads.push([x, y + 1]);
    return neighborPads.filter((neighbor) => {
        return neighbor.every((val) => {
            return val >= 0 && val < size;
        });
    });

};


import React from 'react';
import { array, string } from 'prop-types';

const resort = (data, param, value) => {
    let array = [];
    data.forEach((element) => {
        for (const key in element) {
            if (element[key] === value) {
                array.push(element);
            }
        }
    });
    return array;
}

const Sorter = (data, param, value) => {
    let tileArray = [];
    switch (param) {
        case 'alphabetical' :
            tileArray= resort(data, param, value);
        case 'region' :
            tileArray = resort(data, param, value);
            break;
        default : 
            break;
    }
    return tileArray;
}

Sorter.propTypes = {
    data: array.isRequired,
    param: string.isRequired,
    value: string.isRequired
};

export default Sorter;

import React from 'react';
import { array, arrayOf } from 'prop-types';

const resort = (data, param, value) => {
    let array = [];
    data.forEach((element) => {
        for (const key in element) {
            if (key === param && element[key] === value) {
                array.push(element);
            }
        }
    });
    return array;
}

const Sorter = (data, filters) => {
    if (filters.length === 0) {
        return data;
    }
    let tileArray = resort(data, filters[0].param, filters[0].value);
    return tileArray;
}

Sorter.propTypes = {
    data: array.isRequired,
    filters: arrayOf({}).isRequired
};

export default Sorter;

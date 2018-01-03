import React from 'react';
import { array, arrayOf } from 'prop-types';

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

const Sorter = (data, filters) => {
    if (filters.length === 0) {
        return data;
    }
    let tileArray = [];
    return tileArray;
}

Sorter.propTypes = {
    data: array.isRequired,
    filters: arrayOf({}).isRequired
};

export default Sorter;

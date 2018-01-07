import React from 'react';
import { func, string } from 'prop-types';

const FilterTag = ({param, removeFilter, value}) => {
    return (
        <a className="filter-tag" onClick={() => {removeFilter('remove', param, value)}}>
            <span>{param}: </span>
            <span>{value}</span>
        </a>
    );
}

FilterTag.propTypes = {
    param: string.isRequired, 
    removeFilter: func.isRequired,
    value: string.isRequired,
};

export default FilterTag;

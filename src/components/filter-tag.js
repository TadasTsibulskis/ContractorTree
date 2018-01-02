import React from 'react';
import { string } from 'prop-types';

const FilterTag = ({param, reset, value}) => {
    return (
        <div className="filter-tag">
            <span>{param}</span>
            <span>{value}</span>
        </div>
    );
}

FilterTag.propTypes = {
    param: string.isRequired, 
    value: string.isRequired,
};

export default FilterTag;

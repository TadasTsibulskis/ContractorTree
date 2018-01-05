import React, { Component } from 'react';
import { arrayOf, func } from 'prop-types';

import FilterTag from './filter-tag';

const renderFilterTags = (filters, removeFilter) => {
    let tagArray = [];
    filters.forEach((ele) => {
        tagArray.push(<FilterTag param={ele.param} removeFilter={removeFilter} value={ele.value} />);
    });
    return tagArray;
}
const FilterDisplay = ({filters, removeFilter}) => {
    return (
        <div className="ct-filters">
            {renderFilterTags(filters, removeFilter)}
        </div>
    );
}

FilterDisplay.propTypes = {
    filters: arrayOf({}).isRequired,
    removeFilter: func.isRequired
};

export default FilterDisplay;

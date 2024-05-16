import React from 'react';
import './SortBar.css';

function SortBar({ handleSort, sortState }) {
    var { type, direction } = sortState;


    return (
        <div className='sort-buttons'>
            <button className={`sort-abc-button ${type === 'text' ? 'active' : ''}`} onClick={() => handleSort('text', direction)}>🇦</button>
            <button className={`sort-date-button ${type === 'date' ? 'active' : ''}`} onClick={() => handleSort('date', direction)}>🗒️</button>
            <button className={`sort-comp-button ${type === 'completed' ? 'active' : ''}`} onClick={() => handleSort('completed', direction)}>✅</button>
            
            <button className={`sort-ascending-button ${direction === 'ascending' ? 'active' : ''}`} onClick={() => handleSort(type, 'ascending')}>⇣</button>
            <button className={`sort-descending-button ${direction === 'descending' ? 'active' : ''}`} onClick={() => handleSort(type, 'descending')}>⇡</button>
        </div>
    );
}


export default SortBar;

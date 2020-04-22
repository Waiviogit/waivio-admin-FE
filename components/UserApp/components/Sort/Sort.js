import React from 'react';
import { Dropdown } from "semantic-ui-react";
import './Sort.scss'

const Sort = ({ setSortBy }) => {
    const selectOptions = [
        { key: 'alphabet', value: 'alphabet', text: 'Alphabet' },
        { key: 'followers', value: 'followers', text: 'Followers' },
        { key: 'weight', value: 'weight', text: 'Weight' },
    ];

    const sortHandle = (e, data) => setSortBy(data.value);

    return (
        <div className='sort'>
            <div className='sort__body'>
                <span className='sort__body-title'>Sort by</span>
                <Dropdown
                    fluid
                    inline
                    pointing='top right'
                    defaultValue={selectOptions[0].value}
                    options={ selectOptions }
                    onChange={sortHandle}
                />
            </div>
        </div>
    )
};

export default Sort;

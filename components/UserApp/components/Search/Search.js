import React, { useState, useEffect } from 'react';
import { CustomButton } from "../../../common/buttons";
import { map, isEmpty, includes, find, filter } from 'lodash'
import { Input } from "semantic-ui-react";

const Search = ({ list, searchHandle }) => {
    const [inputValue, setInputValue] = useState('');
    const inputHandler = (e) => setInputValue(e.target.value);

    const [searchedList, setSearchedList] = useState([]);
    const [isOpenModal, setOpenModal] = useState(true);

    useEffect(() => {
        setSearchedList(filter(list,
                item => item.name ?
                    includes(item.name, inputValue) :
                    includes(item, inputValue))
        );
    }, [inputValue]);

    const handleSubmit = () => {
        searchHandle(searchedList);
        setOpenModal(false);
    };

    const handleUserFind = (e) => {
        searchHandle([find(list,
            item => item.name ?
                item.name === e.target.textContent :
                item === e.target.textContent
        )]);
        setOpenModal(false);
        setInputValue(e.target.textContent);
    };


    return (
        <div className='user-app__content-search'>
            <Input
                className='user-app__content-search-input'
                icon='search'
                iconPosition='left'
                onChange={inputHandler}
                value={inputValue}
            />
            <CustomButton
                className='user-app__content-search-btn'
                color="orange"
                content='Search'
                onClick={handleSubmit}
            />
            {
                isOpenModal && inputValue && !isEmpty(searchedList) &&
                <div className='user-app__content-search-modal'>
                    {map(searchedList, item => (
                        <div
                            className='user-app__content-search-modal-user'
                            onClick={handleUserFind}
                        >
                            {item.name ? item.name : item}
                        </div>)
                    )}
                </div>
            }
        </div>
    )
};

export default Search;

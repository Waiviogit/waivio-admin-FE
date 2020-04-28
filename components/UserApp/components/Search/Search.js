import React, { useState, useEffect } from 'react';
import { CustomButton } from "../../../common/buttons";
import { map, isEmpty, includes, find, filter, forEach } from 'lodash'
import { Input } from "semantic-ui-react";
import ClearIcon from "./ClearIcon";

const Search = ({ list, searchHandle, inputValue, setInputValue }) => {
    if(list.mustBeSpreded) {
        let newList = [];
        forEach(list, item => {
            newList = [...newList, ...map(item)]
        });
        list = newList
    }

    const inputHandler = (e) => {
        setOpenModal(true);
        setInputValue(e.target.value);
    };
    const inputClear = () => setInputValue('');
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
        if (inputValue.trim()) {
            searchHandle(searchedList);
            setOpenModal(false);
        } else searchHandle([]);
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
                label={<ClearIcon handler={inputClear}/>}
                labelPosition='right corner'
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
                    {map(searchedList, (item, index) => (
                        <div
                            key={index}
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

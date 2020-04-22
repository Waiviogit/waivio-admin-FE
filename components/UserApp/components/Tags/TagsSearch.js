import React from 'react';
import { connect } from "react-redux";
import { map, toPairs, forIn, assign, flatten } from 'lodash';
import { searchTags, setInputValue } from "../../../../redux/actions/searchActions";
import Search from "../Search";

const TagsSearch = ({ tagsData, searchHandle, contentIndex, setInputValue, inputValue }) => {
    const categories = toPairs(tagsData);
    const allCategories = {};

    forIn(tagsData, tags => {
        assign(allCategories, tags)
    });
    const list = contentIndex === 0 ? flatten(map(categories, category => category[1])) : map(categories[contentIndex - 1][1]);

    contentIndex === 0 ? list.mustBeSpreded = true : list.mustBeSpreded = false;

    return <Search inputValue={inputValue} setInputValue={setInputValue} searchHandle={searchHandle} list={list} />
};

const mapSateToProps = state => ({
    contentIndex: state.ui.tags.contentIndex,
    inputValue: state.ui.search.inputValue
});

const mapDispatchToProps = (dispatch) => ({
    searchHandle: (payload) => dispatch(searchTags(payload)),
    setInputValue: (payload) => dispatch(setInputValue(payload))
});

export default connect(mapSateToProps, mapDispatchToProps)(TagsSearch);

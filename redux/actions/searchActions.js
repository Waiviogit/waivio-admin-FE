export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SEARCH_MODERATORS = 'SEARCH_MODERATORS';
export const SEARCH_SERVICE_BOTS = 'SEARCH_SERVICE_BOTS';
export const SEARCH_BLACK_LIST_USERS = 'SEARCH_BLACK_LIST_USERS';
export const SEARCH_TOP_USERS = 'SEARCH_TOP_USERS';
export const SEARCH_SUPPORTED_HASHTAGS = 'SEARCH_SUPPORTED_HASHTAGS';
export const SEARCH_TAGS = 'SEARCH_TAGS';
export const CLEAR_SEARCHED_CONTENT = 'CLEAR_SEARCHED_CONTENT';
export const SEARCH_STATISTICS = 'SEARCH_STATISTICS';

export const searchModerators= (payload) =>  ({
    type: SEARCH_MODERATORS,
    payload,
});

export const searchServiceBots = (payload) =>  ({
    type: SEARCH_SERVICE_BOTS,
    payload,
});

export const searchBlackListUsers = (payload) =>  ({
    type: SEARCH_BLACK_LIST_USERS,
    payload,
});

export const searchTopUsers= (payload) =>  ({
    type: SEARCH_TOP_USERS,
    payload,
});

export const searchSupportedHashtags = (payload) =>  ({
    type: SEARCH_SUPPORTED_HASHTAGS,
    payload,
});

export const searchTags = (payload) =>  ({
    type: SEARCH_TAGS,
    payload,
});

export const setInputValue = (payload) =>  ({
    type: SET_INPUT_VALUE,
    payload,
});

export const searchStatistics = (payload) =>  ({
    type: SEARCH_STATISTICS,
    payload,
});

export const clearSearchedContent = () => ({ type: CLEAR_SEARCHED_CONTENT });




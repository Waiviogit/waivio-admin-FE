export const setStorageData = (key, value) => {
    localStorage.setItem(key, value);
};

export const removeStorageData = (key) => {
    localStorage.removeItem(key);
};

export const getStorageData = (key) => {
    localStorage.getItem(key);
};

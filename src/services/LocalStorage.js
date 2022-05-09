const __storage = localStorage;
const DARK_MODE_KEY = 'mn_darkmode';

const get = (key) => {
    if (!__storage.getItem(key)) return;
    return JSON.parse(__storage.getItem(key));
}

const remove = (key) => {
    return __storage.removeItem(key);
}

const set = (key, value) => {
    if (!key) return;
    __storage.setItem(key, JSON.stringify(value));
}

const getDarkModeKey = () => {
    return DARK_MODE_KEY;
}

const LocalStorage = {
    get,
    set,
    remove,
    getDarkModeKey
}

export default LocalStorage;
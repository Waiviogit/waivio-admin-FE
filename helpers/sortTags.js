import { orderBy, keys, forEach} from 'lodash'

export default (list) => {
    const sortedTags = {};
    forEach(keys(list), (category) => {
        const sortedCategory = orderBy(list[category], [], '');
        const categoryKeys = orderBy(keys(list[category]), [], '');
        sortedTags[category] = {};
        forEach(categoryKeys, (tagKey, index) => {
            sortedTags[category][tagKey] = sortedCategory[index]
        });

    });
    return orderBy(list, [], 'asc');
}

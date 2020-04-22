import { orderBy } from 'lodash'

export default (list, sortBy, isUpFollowersSort, isUpWeightSort, isUpNameSort) => {
    switch(sortBy) {
    case 'alphabet':
        return isUpNameSort ?
            orderBy(list, ['name'], 'asc') :
            orderBy(list, ['name'], 'asc').reverse();
    case 'weight':
        return isUpWeightSort ?
            orderBy(list, ['wobjects_weight'], 'disc').reverse() :
            orderBy(list, ['wobjects_weight'], 'disc');
    case 'followers':
        return isUpFollowersSort ?
            orderBy(list, ['followers_count'], 'disc').reverse() :
            orderBy(list, ['followers_count'], 'disc');
    }
}

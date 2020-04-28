import {isEqual} from 'lodash'

export const dateToString = (date) => {
    let dateNumber = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    if(dateNumber < 10) dateNumber = `0${dateNumber}`;
    if(month < 10) month = `0${month}`;
    return `${year}-${month}-${dateNumber}`
};

export const showDateFormatter = (startDate, endDate) => {
    console.log(isEqual(startDate, endDate))
    if (startDate === endDate) return startDate;
    return `${startDate} - ${endDate}`
};

export default (date) => showDateFormatter(dateToString(date[0]), dateToString(date[1]));

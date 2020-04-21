import { forIn } from "lodash";

export default obj => {
    let length = 0;
    forIn(obj, (value, key) => {
        if (obj.hasOwnProperty(key)) length++;
    });
    return length;
}

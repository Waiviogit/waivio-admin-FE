export default function (data) {
    let headers;
    try {
        headers = JSON.parse(data);
    } catch (error) {
        headers = data;
    }
    return headers;
}
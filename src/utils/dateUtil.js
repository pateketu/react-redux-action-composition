export function formatDate(date){
    const timestamp = Date.parse(date);
    if(!isNaN(timestamp)){
        const d = new Date(timestamp);
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    }
    return null;
}
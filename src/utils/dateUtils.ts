export const GetFormattedDateString = (dateToFormat:Date) =>{
    const date = new Date(dateToFormat);
  var datestring =
  date.getDate() +
    "." +
    (date.getMonth() + 1) +
    "." +
    date.getFullYear();

    return datestring;
}

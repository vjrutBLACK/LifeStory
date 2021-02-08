import dateFormat from 'dateformat';
import moment from 'moment';
import 'moment/locale/vi';
import 'moment/locale/en-au';

export const shortDate = (date: any) => {
  let datetime;
  if (!date.getTime) {
    datetime = new Date(date * 1000);
  } else {
    datetime = date;
  }

  return dateFormat(datetime, 'shortDate');
};

export const longDate = (date: any) => {
  let datetime;
  if (!date.getTime) {
    datetime = new Date(date * 1000);
  } else {
    datetime = date;
  }

  return dateFormat(datetime, 'longDate');
};

export const defaultDate = (date: any) => {
  let datetime;
  if (!date.getTime) {
    datetime = new Date(date * 1000);
  } else {
    datetime = date;
  }

  return dateFormat(datetime, 'default');
};

export const convertDate = (date: any) => {
  let current_datetime = new Date(date * 1000);
  let formatted_date =
    current_datetime.getDate() +
    '/' +
    (current_datetime.getMonth() + 1) +
    '/' +
    current_datetime.getFullYear() +
    ' ' +
    current_datetime.getHours() +
    ':' +
    current_datetime.getMinutes() +
    ':' +
    current_datetime.getSeconds();
  return formatted_date;
  // yyyy-mm-dd hh:mm:ss
};

export const getDate = (dateTime: any) => {
  const date = new Date(dateTime).getDate();
  const month = new Date(dateTime).getMonth() + 1;
  const formatted_date = date + '/' + month;
  return formatted_date;
};

export const getFullDate = (dateTime: any) => {
  const date = new Date(dateTime).getDate();
  const month = new Date(dateTime).getMonth() + 1;
  const year = new Date(dateTime).getFullYear();
  const formatted_date = date + '/' + month + '/' + year;
  return moment(dateTime).format(SHORT_DATE_FORMAT);
};

export const getFullDateTime = (dateTime: any) => {
  const date = new Date(dateTime).getDate();
  const month = new Date(dateTime).getMonth() + 1;
  const year = new Date(dateTime).getFullYear();

  const hour = new Date(dateTime).getHours();
  const minute = new Date(dateTime).getMinutes();

  const formatted_date = date + '/' + month + '/' + year + ' ' + hour + ':' + minute;
  return formatted_date;
};

export const getRelativeTime = (dateTime: any, lang: string) => {
  const baseMonth = new Date(dateTime).getMonth() + 1;

  const date = new Date(dateTime).getDate();
  const month = baseMonth < 10 ? '0' + baseMonth : '' + baseMonth;
  const year = new Date(dateTime).getFullYear();

  const hour = new Date(dateTime).getHours();
  const minute = new Date(dateTime).getMinutes();
  const second = new Date(dateTime).getSeconds();

  const timeFormat = `${year}${month}${date} ${hour}:${minute}:${second}`;

  const relativeTime = moment(timeFormat, 'YYYYMMDD HH:mm:ss').locale(lang.toString()).startOf('minutes').fromNow();

  return relativeTime;
};

export const DATE_MONTH_FORMAT = 'DD/MM';
export const SHORT_DATE_FORMAT = 'DD/MM/YYYY';
export const MONTH_YEAR_FORMAT = 'MM/YYYY';
export const HH_MM = 'HH:mm';
export const FULLDATE_FORMNAT = 'DD/MM/YYYY HH:mm';

/**
 * Formats a date to the following format: 
 * 
 * weekday, DD-MM-YYYY
 * 
 */
export function formatDate(date: string | number | Date) {
  return new Date(date).toUTCString().replace(/(\d\d\d\d) .*/, "$1"); 
}
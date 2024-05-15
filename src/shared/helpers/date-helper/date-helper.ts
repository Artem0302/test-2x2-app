import {format} from 'date-fns';

export function getCurrentDateFormatted() {
  const currentDate = new Date();

  return format(currentDate, 'iiii, d MMMM yyyy');
}

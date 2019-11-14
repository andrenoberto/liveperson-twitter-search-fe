import {Pipe, PipeTransform} from '@angular/core';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

@Pipe({name: 'relativeDate'})
export class RelativeDatePipe implements PipeTransform {
  transform(value) {
    const date = new Date(value);

    return formatDistanceToNow(date, {addSuffix: true});
  }
}

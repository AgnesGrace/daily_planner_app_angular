import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, stringLength: number = 15) {
    if (value.length <= stringLength) {
      return value;
    } else {
      return value.substring(0, stringLength) + '...';
    }
  }
}

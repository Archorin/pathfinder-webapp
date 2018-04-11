import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {
  transform(value: string[], replacement: string): string {
    return value.join(' ' + replacement + ' ');
  }
}

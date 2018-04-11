import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholderFiligrane'
})

/*
* Ce pipe permet de retourner un placeholder lorsque la valeur de la case n'est pas présente
*/
export class PlaceholderFiligranePipe implements PipeTransform {
  transform(value: any, replacement: string): string {
    if (value) {
      return '';
    }
    return replacement;
  }
}

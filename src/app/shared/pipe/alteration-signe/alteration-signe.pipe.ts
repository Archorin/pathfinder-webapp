import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alterationSigne'
})

export class AlterationSignePipe implements PipeTransform {

  transform(value: any): string {
      if (value >= 0) {
        return '+ ' + value;
      }
      return '- ' + Math.abs(value);
  }

}

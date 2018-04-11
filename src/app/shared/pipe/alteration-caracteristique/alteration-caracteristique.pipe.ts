import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alterationCaracteristique'
})

/*
* Ce pipe permet de calculer le bonus d'altération d'une caractéristique
*/
export class AlterationCaracteristiquePipe implements PipeTransform {

  transform(value: any, dry: boolean = false): any {
    let modificateur: any = Math.floor(value / 2) - 5;
    if (!dry) {
      if (modificateur >= 0) {
        modificateur = '+ ' + modificateur;
      } else {
        modificateur = '- ' + Math.abs(modificateur);
      }
    }

    return modificateur;
  }

}

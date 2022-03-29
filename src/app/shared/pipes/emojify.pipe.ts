import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojify'
})
export class EmojifyPipe implements PipeTransform {

  transform(player: number) {
    return player === 1 ? '❌': '⭕';
  }

}

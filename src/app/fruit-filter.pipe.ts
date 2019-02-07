import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fruitFilter'
})
export class FruitFilterPipe implements PipeTransform {

  transform(value: string[], letter: string): any {
    if(letter && value){
      return value.filter((value) => {
        return value[0] === letter
      });
    }

    return value;

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  fruitArray: string[] = ['banana', 'pear', 'apple', 'peach', 'apricot', 'plum', 'bobobo'];
  char = 'b'
  sum: number = 73/3;
  constructor() { }

  ngOnInit() {
  }

  changeFilter(char: string){
    this.char = char;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {

  active: boolean = true;
  fruits: string[] = ['banana', 'pear', 'peach'];
  
  constructor() { }

  ngOnInit() {
  }

  addFruit(fruit: string){
    this.fruits.push(fruit);
    this.fruits = this.fruits.slice();
  }

}

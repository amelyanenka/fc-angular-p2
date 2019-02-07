import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-item',
  templateUrl: './lifecycle-item.component.html',
  styleUrls: ['./lifecycle-item.component.scss']
})
export class LifecycleItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() incomingArray: string[];
  constructor() { }


  ngOnChanges(){
    console.log('ngOnChanges', this.incomingArray);
  }

  ngOnInit() {
    console.log('ngOnInit', this.incomingArray);
  }

  ngOnDestroy(){
    console.log('ngOnDestroy', this.incomingArray);
  }

}

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
 links: string[] = [
  'lifecycle-hooks',
  'pipes',
  'services',
  'http',
  'forms',
 ]

 public statusValue: string;

 constructor(private accountsService: AccountsService){ }

 ngOnInit(){
  this.accountsService.updatedStatusValue.subscribe((status: string)=>{
    this.statusValue = status;
  })
 }
}

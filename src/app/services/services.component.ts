import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  public accounts: {name: string, status: string}[];
  
  constructor(private accountsService: AccountsService){
    this.accounts = this.accountsService.accounts;
  }

  ngOnInit() {
  }

}

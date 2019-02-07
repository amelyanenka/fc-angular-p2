import { Component, Input} from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  public articlesArray: any[] = []

  constructor(private accountsService: AccountsService){

  }

  onReportTo(status: string){
    this.accountsService.updatedStatusValue.emit(status)
  }

  deactivate(id:number){
    this.accountsService.changeAccount(id);
  }

}

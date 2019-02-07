import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }

  accounts = [
    {
        name: 'Master Account',
        status: 'active'
    },
    {
        name: 'Testaccount',
        status: 'inactive'
    },
    {
        name: 'Hidden Account',
        status: 'unknown'
    }
];

public updatedStatusValue: EventEmitter<string> = new EventEmitter();

reportStatus(status: string){
    this.updatedStatusValue.emit(status)
}

addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    console.log('A new account was created with status ' + status);
}

changeAccount(id: number){
    this.accounts[id].status = 'inactive';
}

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public userNameControl: FormControl = new FormControl('', Validators.required);
  public emailControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public sendEmailsControl: FormControl = new FormControl();
  public userFormGroup: FormGroup = new FormGroup({
    userName: this.userNameControl,
    email: this.emailControl
  });
  public fullData: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //this.buildForm();
    // this.userNameControl.setValue('John');
    // this.emailControl.setValue('test@email.com');
    // this.lastnameControl.setValue('NN');


    this.userFormGroup.valueChanges.subscribe((data) => {
      this.fullData = `${data.userName} ${data.email}`;
      console.log(this.userFormGroup);
    })
    //this.userFormGroup.
  }

  public buildForm(): void {
    this.userFormGroup = this.fb.group({
      userName: this.userNameControl,
      email: this.emailControl,
      lastname: this.sendEmailsControl
    })
  }

  public submitForm(): void {
    if(this.userFormGroup.valid){
      this.userFormGroup.value;
    }
  } 

}

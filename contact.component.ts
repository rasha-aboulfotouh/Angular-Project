import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  

  

   myForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Subject: new FormControl(''),
      Message: new FormControl(''),
  

    });
  

  onSubmit() {
    console.log(this.myForm.value);
  }
   






}

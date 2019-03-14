import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email:any='';
  constructor(private router: Router) { }

  ngOnInit() {
     this.resetForm();
  }
  resetForm(form? : NgForm){
    if(form !=null)
    form.reset();
   this.Email='';
  }

  Submit(email)
  {
    // var a=this.Email.value;
    var a='lakshmi.p@xsilica.com'
    if(a == email)
    {
      alert("Sucess");
      this.router.navigate(['/home']);
    }
    else{
      alert("Enter a valid Email");
    }
    this.resetForm();
  }

}

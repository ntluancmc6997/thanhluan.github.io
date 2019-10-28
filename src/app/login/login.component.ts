import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/login.service'
import { Router } from '@angular/router';
import { Input } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder, private loginService: LoginService) { }
  check: any;
  message: string;

  loginForm = new FormGroup({
    userName: new FormControl('',Validators.required),
    passWord: new FormControl('',Validators.required),
  });
  ngOnInit() {

  }
  onSubmit() {
    this.check = this.loginService.getTodayDate(this.loginForm.value.userName, this.loginForm.value.passWord);
    if (this.check) {
      this.router.navigate(['/checkLogin'])
      this.message = "success"
    }
    else {
      this.message = "Fail";
    }

    console.warn(this.check);
  }


}

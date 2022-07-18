import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  constructor(private service: MyserviceService, private routes: Router,private formBuilder:FormBuilder) { }
  msg:any;
  userid = '1';
  loginForm!: FormGroup;
  ngOnInit() {
    localStorage.setItem('session', this.userid);
      this.loginForm = this.formBuilder.group({
        userid: ['', Validators.required],
        password: ['', Validators.required]
      });
  }
  check(uname: string, p: string) {
    var output = this.service.checkusernameandpassword(uname, p);
    if (output == true) {
      this.routes.navigate(['/employee']);
    }
    else {
      this.msg = 'Invalid username or password';
    }
  }

}


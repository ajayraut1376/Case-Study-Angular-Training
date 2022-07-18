import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JphService } from '../services/jph.service';
import { map } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  Emp: any;
  status: any;
  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private fetch: JphService, private http: HttpClient, private formBuilder:FormBuilder) { }
userForm!:FormGroup

  ngOnInit(): void {
    this.fetchData();
    this.userForm = this.formBuilder.group({
      id: ['',[Validators.required]],
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      website: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    })

  }

  get getControl() {
    return this.userForm.controls;
  }

  fetchData() {
    this.fetch.getCall().subscribe(
      (Response) => {
        console.log(Response);
        this.Emp = Response;
      },
      (error) => {
        console.log('this is a sms ', error.message);
      }
    );
  }

  deletePost(users: any) {
    this.http.delete(this.url + '/' + users.id).subscribe((response) => {
      let index = this.Emp.indexOf(users);
      console.log("index",index);

      this.Emp.splice(index, 1);
    });
  }

  updatePost(user:any) {
    this.http.patch(this.url + '/' + user.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      });
  }

  createPost(
    id: any,
    name: any,
    username: any,
    email: any,
    website: any,
    phone: any
  ) {
    let user = {
      id: id.value,
      name: name.value,
      username: username.value,
      email: email.value,
      website: website.value,
      phone: phone.value,
      address: '',
      company: '',

    };
    id.value = '';
    name.value = '';
    username.value = '';
    email.value = '';
    website.value = '';
    phone.value = '';
    this.http.post(this.url, JSON.stringify(user)).subscribe((response) => {
      this.Emp.push(user);
      console.log(response);
      console.log(user);

    });
  }
}

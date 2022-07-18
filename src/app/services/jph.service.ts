import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class JphService {
  constructor(private _httpClient: HttpClient) {

  }
  url = "https://jsonplaceholder.typicode.com/Users";
  getCall() {
    return this._httpClient.get(this.url)
  }

  delete() {
    return this._httpClient.delete('https://jsonplaceholder.typicode.com/users/1')
  }
}

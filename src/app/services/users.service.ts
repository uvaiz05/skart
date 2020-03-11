import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseurl = "http://localhost:3000/"
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  registerUserBuyer(name,  email, phone, password) {
    console.log(`${baseurl}registerbuyer`);
    return this.http.post(`${baseurl}registerbuyer`, {
      name,
      
      email,
      phone,
      password
    })
  }
  registerUserSeller(name, shopname, email, phone, password) {
    console.log(`${baseurl}registerseller`);
    return this.http.post(`${baseurl}registerseller`, {
      name,
      shopname,
      email,
      phone,
      password
    })
  }

}
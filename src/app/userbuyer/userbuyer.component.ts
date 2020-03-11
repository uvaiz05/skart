import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-userbuyer',
  templateUrl: './userbuyer.component.html',
  styleUrls: ['./userbuyer.component.css']
})
export class UserbuyerComponent implements OnInit {
  userBuyerForm;

  constructor(private usersservice: UsersService,
    private fb: FormBuilder) {
    this.userBuyerForm = this.fb.group({
      name: new FormControl('', []),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),

    })
  }

  ngOnInit() {
  }
  userBuyer() {
    this.usersservice.registerUserBuyer(this.userBuyerForm.value.name, this.userBuyerForm.value.email, this.userBuyerForm.value.phone, this.userBuyerForm.value.password)
      .subscribe(date => {
        alert("sucess")
      })
  }

}



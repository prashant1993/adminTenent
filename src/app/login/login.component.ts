import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
// import { RestapiserviceService } from '../RestapiserviceService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public restapiserviceService:RestapiserviceService) { }

  ngOnInit() {
  }

  login(value){
    console.log(value);
    this.restapiserviceService.getData();
  }


}

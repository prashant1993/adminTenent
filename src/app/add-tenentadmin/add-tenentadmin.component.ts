import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
@Component({
  selector: 'app-add-tenentadmin',
  templateUrl: './add-tenentadmin.component.html',
  styleUrls: ['./add-tenentadmin.component.css']
})
export class AddTenentadminComponent implements OnInit {
  private fieldArray: Array<any> = [];
      private newAttribute: any = {};

  constructor() { }

  ngOnInit() {
  }

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }
  displayedColumns = ['email', 'name', 'mobile', 'role'];
 dataSource = new MatTableDataSource(ELEMENT_DATA);

 @ViewChild(MatSort) sort: MatSort;

 /**
  * Set the sort after the view init since this component will
  * be able to query its view for the initialized sort.
  */
 ngAfterViewInit() {
   this.dataSource.sort = this.sort;
 }

export interface Element {
 name: string;
 email: string;
 weight: number;
 symbol: string;

}

const ELEMENT_DATA: Element[] = [
 {email:"prashant@gmail.com" , name: 'prashant', mobile: 12345677890, role: 'HR'},
 {email: "abc@gmail.com", name: 'abc', mobile:23435345435, role: 'He'},
 {email: "xyz@gmail.com", name: 'xyz', mobile: 664654654654, role: 'Li'},
 // {email: "pqr@gmail.com", name: 'pqr', mobile:34423423423, role: 'Be'}
];




}

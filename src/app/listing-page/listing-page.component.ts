import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {
  public show: boolean = false;
  public buttonName: any = '+';

  constructor() { }

  ngOnInit() {
  }

  //return button index to function
  setClickedRow(index) {
    this.selectedRow = index;
    console.log("index", index);
    // this.show = !this.show;
  }

  clicked() {// only show clicked img info
    let e = event.target;
    // this.show = !this.show;
    console.log(e);
    // this.show=!this.show;
  };

  //hide show button
  toggle(index) {
    this.show = !this.show;
    console.log("index", index);
    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = "-";
    else
      this.buttonName = "+";
  }


  displayedColumns = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);


export interface Element {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079 },
  { position: 2, name: 'Helium', weight: 4.0026 },
  { position: 3, name: 'Lithium', weight: 6.941 }

];

}

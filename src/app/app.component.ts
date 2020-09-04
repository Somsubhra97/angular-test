import { Component, VERSION, OnInit } from '@angular/core';

import {Service} from './info.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  title:string= 'Angular ' + VERSION.major;
  public send_val="Som";
  public msg:number;
  public arr:Array<string>=[];
  
  constructor(public info:Service){}

  ngOnInit(){
    this.info.create("added");
  }

  returnFunction(){
    return this.title;
  }

 del(x){
  const idx= parseInt(x);
  console.log(this.arr[idx]);
 } 
 fill(x){
   this.arr.push(x);console.log(x);
 }
  
}

//ng g c server --spec false
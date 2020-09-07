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
  public data:string;
  public stash:Array<string>=["som","subhra"];
  
  constructor(public info:Service){}

  ngOnInit(){
    this.info.create("added");
  }

  returnFunction(){
    return this.title;
  }

 del(x){
  // const idx= parseInt(x);
  // console.log(idx);
  // this.stash.splice(idx,1);
  const idx= parseInt(x);
  this.data=this.stash[idx];
 } 

 fill(x){
   this.stash.push(x);
   
 }
  
}

//ng g c server --spec false
import { Component,Input,Output,EventEmitter,OnInit } from "@angular/core";
interface Pdt{
  name:string
}
import {NgForm} from '@angular/forms';
import {Service} from '../info.service';

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
  // styleUrls: ["./app.component.css"]
})
export class ServerComponent implements OnInit{

  constructor(public info:Service){}

  ngOnInit(){
    console.log(this.info.getInfo());
  }

  servers:Array<String>=[];
  test:boolean=true;
  input:string="";
  title:string="";
  
  @Input() public parentData;
  @Input() public update;
  @Input() public serverData;
  @Output() public childEvent=new EventEmitter<number>();
  @Output() public fill_parent=new EventEmitter<string>();
  @Output() public send_parent=new EventEmitter();
  
  addServer(){
    this.servers.push(`${(Math.random()*10).toFixed(1)} is added`);
    return this.servers[0];
  }
 fillParent(){
  this.fill_parent.emit(this.input);
  this.input="";
}
sendIdx(x){
  this.send_parent.emit(x);   

}
Add(x:NgForm){
  console.log(x.value.title);
  this.title="";
}
  onCreate(){
    this.test=!this.test;    
  }
  fillServer(){
    this.servers.push(this.input);
    this.input="";
  }
  getServer(){
    return this.servers;
  }

  onInput(e){
    this.input=e.target.value;
  }

  dispatcher(){
    this.childEvent.emit(10);
  }
}

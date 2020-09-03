import { Component,Input,Output,EventEmitter } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
  // styleUrls: ["./app.component.css"]
})
export class ServerComponent {
  servers:Array<String>=[];
  test:boolean=true;
  input:string="";
  
  @Input() public parentData;
  @Output() public childEvent=new EventEmitter<number>();
  @Output() public fill_parent=new EventEmitter<string>();
  @Output() public send_parent=new EventEmitter<number>();

  addServer(){
    this.servers.push(`${(Math.random()*10).toFixed(1)} is added`);
    return this.servers[0];
  }
 fillParent(){
  this.fill_parent.emit(this.input);
}
sendIdx(x){
  this.send_parent.emit(x);
    this.input="";

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

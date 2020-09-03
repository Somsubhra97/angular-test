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

  addServer(){
    this.servers.push(`${(Math.random()*10).toFixed(1)} is added`);
    return this.servers[0];
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

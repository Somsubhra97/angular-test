import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})
export class Service{
 private info:Array<string>=[];

 getInfo(){  
  return [...this.info];
  }

  create(x:string){
    this.info.push(x)
  }
}
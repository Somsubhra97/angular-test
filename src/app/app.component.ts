import { Component, VERSION } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title:string= 'Angular ' + VERSION.major;
  public send_val="Som";
  public msg:number;
  public arr:Array<string>=[];

  returnFunction(){
    return this.title;
  }

 del(x){
  const idx= parseInt(x);
  console.log(this.arr[idx]);
 } 
 fill(x){
   this.arr.push(x);
 }
  
}

//ng g c server --spec false
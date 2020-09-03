import { Component, VERSION } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title:string= 'Angular ' + VERSION.major;
  public send_val="Som";
  public msg;

  returnFunction(){
    return this.title;
  }
}

//ng g c server --spec false
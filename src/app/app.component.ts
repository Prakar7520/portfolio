import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  count=0;
  list=[1,2,3];
  incrementCount(){
    this.count+=1;
  }
  decrementCount(){
    this.count-=1;
  }
  boundName="MP Lab";
}

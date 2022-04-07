import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoproject';
  constructor(){
    //  setTimeout(() => {
    //    this.title="Changed title";
    //  }, 2000);
  }
}

import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  condition = true;
  valid = false;
  
  fruits = ['Apple','Mango','Kiwi'];

  getVal(val){
    console.log(val);
  }
}

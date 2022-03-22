import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  componentVariable : any;
  defaultValue = false;

  passValue(e : any) {
    this.componentVariable = e.target.value;
  }
  
  submitValue() {
    if( this.componentVariable == 'submitted' ) {
      this.defaultValue = true;
    }
  }
}

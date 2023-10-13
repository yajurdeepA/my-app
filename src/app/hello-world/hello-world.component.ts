import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  message = "Hello World";
  canclick = "true";
  sayMessage(){
    alert("checking");
  }
  sayHelloId =1;
  fontColor = "blue";

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import {Todo} from "./todo"
import { ValueChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My First Project In Angular';

  todovalue:string = "";
  list :Todo[] = [];

  ngOnInit(){
    this.list = [];
    this.todovalue = "";
  }

  addItem(){
     if (this.todovalue !== ""){
      const newItem : Todo = {
        id :Date.now(),
        value:this.todovalue,
        isDone: false
      };
      this.list.push(newItem);

     }
     this.todovalue = "";
  }
  deleteItem(id:number){
    this.list = this.list.filter(item => item.id !== id);
  }

}

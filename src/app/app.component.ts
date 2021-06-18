import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'To-do list';
  public tarefa ='';
  public items = ['item 1', 'item 2', 'item 3', 'item 4'];

  add() : void{
    this.items.push(this.tarefa);
  }

}

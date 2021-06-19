import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  title = 'To-do list';
  public task: string ='';
  public items = ['Estudar C#', 'Debuggar solução', 'Fazer deploy', 'Divulgar'];

  add() : void{
    this.items.push(this.task);
    console.log(this.items);
    console.log(this.task);

  }

  removeAll ():void{
    this.items.splice(0);
  }

}

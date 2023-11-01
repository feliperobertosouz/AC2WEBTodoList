import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  todoList : any = [
    {id: 1, descricao: "Estudar", concluida: true},
    {id: 2, descricao: "Fazer compras", concluida: false},
    {id: 3, descricao: "Fazer exercícios", concluida: false},
    {id: 4, descricao: "Ler", concluida: false},
    {id: 5, descricao: "Assistir TV", concluida: false},
  ]


  concluir(todo: any){
    todo.concluida = !todo.concluida;
  }


}

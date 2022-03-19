import { Component, OnInit } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-readlist',
  templateUrl: './readlist.component.html',
  styleUrls: ['./readlist.component.css']
})
export class ReadlistComponent implements OnInit {

  constructor(public todosvc : TodolistService) { }

  async ngOnInit(): Promise<void> {
    await this.getList();
  }

  async getList(){
    (await this.todosvc.readlist()).subscribe(res => {
      //console.log(res);
    }, err => {});
  }
}

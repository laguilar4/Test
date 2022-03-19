import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators,FormArray} from '@angular/forms';
import { TodolistService } from 'src/app/services/todolist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createlist',
  templateUrl: './createlist.component.html',
  styleUrls: ['./createlist.component.css']
})
export class CreatelistComponent implements OnInit {

  constructor(public fb: FormBuilder, public todosvc : TodolistService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  public listForm = this.fb.group({
    descripcion:[''],
    persona:[''],
    fechavenc:['']
  });

  async create():Promise<void> 
  {
    (await this.todosvc.createlist(this.listForm.value)).subscribe(res => {
      this.toastr.success('Se ha guardado exitosamente', 'Exito!');
    }, err => {
      this.toastr.error('Hubo un error al guardar','Error!');
    });
  }

}

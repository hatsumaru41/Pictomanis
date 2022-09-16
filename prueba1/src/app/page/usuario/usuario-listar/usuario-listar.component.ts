import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  dataSource: MatTableDataSource<usuario> = new MatTableDataSource();
  displayedColumns: string[] =['id', 'name', 'lastname', 'number', 'email', 'password'];
  constructor(private us: UsuarioService) {}


  ngOnInit(): void {
    this.us.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
  }
}

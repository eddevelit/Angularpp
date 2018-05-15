import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

	nombre: string;
	correo: string;
	opcion: number;

  constructor() { }

  ngOnInit() {
  }

  cambiaNombre()
  {
  	this.nombre = 'Eddo';
  }

  onSubmit()
  {
  	console.log("Submit ---");
  }
}

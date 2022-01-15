import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  public heroes:    string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public eliminado: string = '';
  borrarHeroe(){
    this.eliminado = this.heroes.pop() || '';     
  }
}

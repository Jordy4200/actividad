import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../utils/path/producto';
import * as productoData from '../../../public/json/productoData.json';

function randomInt(max: number){
  return Math.floor(Math.random() * max);
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: Producto[] = (productoData as any).default;
  indiceProductoDestacado: number = randomInt(this.productos.length);

  constructor() { }

  ngOnInit(): void {
  }
}

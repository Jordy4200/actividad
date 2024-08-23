import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import * as productoData from '../../../public/json/productoData.json';
import { Producto } from '../../utils/path/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'] 
})
export class ProductosComponent {

  productos: Producto[] = (productoData as any).default;

  constructor(private router: Router) { }

  ngOnInit(): void {  }

  onClickButton(): void {
    console.log("Botón presionado");
  }

  
  onClickProducto(producto: Producto): void {
    this.router.navigate(["/producto", producto.id]);
  }
}

import { Component } from '@angular/core';
import { RouterLink,ActivatedRoute, RouterLinkActive } from '@angular/router';
import * as productoData from '../../../public/json/productoData.json';
import { Producto } from '../../utils/path/producto';
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  producto?:Producto;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      this.producto = ((productoData as any).default as Producto[])
        .find((producto) => producto.id == Number(id));
    });
  }


  


}

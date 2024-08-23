import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  rutaImagenAlma = 'https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160710340/60039401-perfil-avatar-trabajador-del-hotel-ilustración-vectorial-diseño-gráfico.jpg';
  rutaImagenIrma = 'https://blog.peoplenext.com/hubfs/Imported_Blog_Media/perfil-del-candidato-ideal-2.jpg';
  rutaImagenAnton = 'https://previews.123rf.com/images/fizkes/fizkes2102/fizkes210200916/163770405-imagen-de-perfil-de-un-exitoso-hombre-trabajador-empleado-universitario-estudiante-universitario.jpg';

constructor() { }

ngOnInit(): void {
  // Aquí puedes cargar la información de los ejecutivos si es necesario
}

}

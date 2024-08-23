import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Path } from '../../utils/path/path';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  paths: Path[] = [
    { path: '/home', nombre: 'Inicio' },
    { path: '/productos', nombre: 'Productos' },
    { path: '/nosotros', nombre: 'Nosotros' }
  ];
}

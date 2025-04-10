import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navItems = [
    { label: 'Accueil', link: '#home' },
    { label: 'About', link: '#About' },
    { label: 'Projets', link: '#project' },
    { label: 'CV', link: '#cv' },
    { label: 'Contact', link: '#contact-section' },
  ];
}

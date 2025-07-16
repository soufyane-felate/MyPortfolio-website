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
    { label: 'Accueil', link: '#home', type: 'link' },
    { label: 'About', link: '#About', type: 'link' },
    { label: 'Projets', link: '#project', type: 'link' },
    { label: 'CV', type: 'action', action: () => this.downloadCV() },
  ];

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/assets/CV/CV_FSOUFYANE_O.pdf.pdf';
    link.download = 'soufyane.pdf';
    link.click();
  }

  handleItemClick(item: any, event: Event): void {
    if (item.type === 'action' && item.action) {
      event.preventDefault();
      item.action();
    }
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  selectedLanguage: string = 'all'; 

  projects = [
    {
      title: 'BuildFlow-Manager',
      description: 'BuildFlow Manager is a web-based app that helps construction teams efficiently plan, organize, and track projects in real time.',
      UrlLink: 'https://github.com/soufyane-felate/BuildFlow-Manager',
      langue: ['java', 'html', 'css', 'jee', 'js'],
      Image: [
        '../../assets/images/build.',
        '../../assets/images/buildFlow.png',
        '../../assets/images/buildFlow2.png',
        '../../assets/images/buildFlow3.png',
      ],
    },
    {
      title: 'cookspot',
      description: 'CookSpot is a user-friendly website that provides delicious recipes, cooking tips, and meal planning ideas to inspire home cooks and food enthusiasts.',
      UrlLink: 'https://github.com/soufyane-felate/BuildFlow-Manager',
      langue: ['html', 'css', 'js'],
      Image: [
        '../../assets/images/cookspot.png',
        '../../assets/images/cookspot2.png',
      ],
    },
    {
      title: 'movies',
      description: 'A movie website that offers users the latest films, trailers, reviews, and detailed information about upcoming releases, all in one place.',
      UrlLink: 'https://github.com/soufyane-felate/Movies',
      langue: ['js', 'html', 'css'],
      Image: [
        '../../assets/images/movies.png',
        '../../assets/images/movies2.png',
      ],
    },
    {
      title: 'weather',
      description: 'Stay updated with real-time weather forecasts, temperature, and alerts for your location.',
      UrlLink: 'https://github.com/soufyane-felate/weather',
      langue: ['js', 'html', 'css'],
      Image: [
        '../../assets/images/w.png',
        '../../assets/images/w1.png',
        '../../assets/images/w3.png',
      ],
    },
   
    
  ];

  getLanguages(): string[] {
    const langs = new Set(this.projects.flatMap(p => p.langue));
    return ['all', ...langs];
  }

  filteredProjects() {
    if (this.selectedLanguage === 'all') return this.projects;
    return this.projects.filter(p =>
      p.langue.includes(this.selectedLanguage)
    );
  }

  setFilter(lang: string) {
    this.selectedLanguage = lang;
  }
}

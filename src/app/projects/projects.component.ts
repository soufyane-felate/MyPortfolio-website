import { Component } from '@angular/core';
import { title } from 'process';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'BuildFlow-Manager',
      description:
        'BuildFlow Manager is a web-based application for efficient construction project management. It enables teams to create projects, assign tasks, and allocate resources. Users can track progress in real-time to stay organized and on schedule.',
      UrlLink: 'https://github.com/soufyane-felate/BuildFlow-Manager',
      Image: [
        '../../assets/images/buildFlow.png',
        '../../assets/images/buildFlow2.png',
        '../../assets/images/buildFlow3.png',
      ],
    },
    {
      title: 'cookspot',
      description:
        'CookSpot is a user-friendly recipe website where food lovers can discover, share, and save delicious recipes from around the world. Perfect for home cooks and foodies alike!',
      UrlLink: 'https://github.com/soufyane-felate/BuildFlow-Manager',
      Image: [
        '../../assets/images/cookspot.png',
        '../../assets/images/cookspot2.png',
      ],
    },
    {
      title: 'cookspot',
      description:
        'CookSpot is a user-friendly recipe website where food lovers can discover, share, and save delicious recipes from around the world. Perfect for home cooks and foodies alike!',
      UrlLink: 'https://github.com/soufyane-felate/BuildFlow-Manager',
      Image: [
        '../../assets/images/movies.png',
        '../../assets/images/movies2.png',
      ],
    },
    {
      title: 'Wheater',
      description:
        'CookSpot is a user-friendly recipe website where food lovers can discover, share, and save delicious recipes from around the world. Perfect for home cooks and foodies alike!',
      UrlLink: 'https://github.com/soufyane-felate/BuildFlow-Manager',
      Image: [
        '../../assets/images/wheath.png',
        '../../assets/images/wheath2.png',
        '../../assets/images/wheath3.png',
      ],
    },
  ];
}

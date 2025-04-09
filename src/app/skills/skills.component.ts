import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = [
    {
      title: 'HTML',
      image: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
    },
    {
      title: 'CSS',
      image: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
    },
    {
      title: 'BOOTSTRAP',
      image: 'https://cdn-icons-png.flaticon.com/128/5968/5968672.png',
    },
    {
      title: 'JS',
      image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    },
    {
      title: 'JAVA',
      image: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
    },
    {
      title: 'FLUTTER',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    },
    {
      title: 'GIT',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      title: 'SQL',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  Informations = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/5585/5585856.png',
      title: 'Phone',
      t1: '+212 622725296',
      t2: '+212 632807591',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
      title: 'Address',
      t1: '23000 Beni mellal , MAR',
      t2: '25060 boujaad , MAR',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/15047/15047587.png',
      title: 'Email',
      t1: 'soufyanfellat03@gmail.com',
      t2: 'soufyanfellat0@gmail.com',
    },
  ];
}

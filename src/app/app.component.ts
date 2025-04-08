import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ExperienceComponent } from './experience/experience.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FirstBodyComponent } from './first-body/first-body.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SkillsComponent,
    ExperienceComponent, NavbarComponent, FirstBodyComponent,
    AboutComponent, FooterComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}

//app.routes.ts
import { Routes } from '@angular/router';
import { AllProjectComponent } from './all-project/all-project.component';
import { FirstBodyComponent } from './home/first-body.component'; 
import { CvComponent } from './cv/cv.component';

export const routes: Routes = [
  { path: 'home', component: FirstBodyComponent }, 
  { path: 'allProject', component: AllProjectComponent },
  {path:'cv',component:CvComponent},
];

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'about', component: AboutComponent },
    { path: 'education', component: EducationComponent }
];
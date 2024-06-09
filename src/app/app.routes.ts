import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'heroes', component: HeroesComponent, title: "Tour of Heroes - Seleção de Herói" },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'detail', redirectTo: '/heroes', pathMatch: 'prefix' },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/heroes',  pathMatch: 'full'}
];
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

import { Hero } from '../hero';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, HeroDetailComponent, FormsModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  heroList: Array<Hero> = [];

  constructor(private heroService: HeroService, public messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero?: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroList => this.heroList = heroList);
  }

  onSelect(hero: Hero): void {
    this.messageService.add(`Abriu herói ${hero.name}`);
    this.selectedHero = hero;
  }
}

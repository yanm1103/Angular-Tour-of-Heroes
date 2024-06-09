import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Hero } from '../hero';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroDetailComponent, MatButtonModule, MatIconModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  @ViewChild('heroesCarousel') private heroesCarousel!: ElementRef; // This thing allows us to reference a HTML element

  heroList: Array<Hero> = [];

  constructor(private heroService: HeroService, public messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroList => this.heroList = heroList);
  }

  sideScroll(direction: string): void { // This function is used by the previous and next buttons
    const containerToScroll = this.heroesCarousel.nativeElement;
    const scrollAmount = 320;
    const scrollOptions = {
      behavior: 'smooth',
      left: 0
    }
    if (direction == 'left')
      scrollOptions.left = -scrollAmount;
    else
      scrollOptions.left = +scrollAmount;
    containerToScroll.scrollBy(scrollOptions);
  }
}

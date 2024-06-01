import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Array<Hero>> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService carregou lista de heróis');
    return heroes;
  }
}
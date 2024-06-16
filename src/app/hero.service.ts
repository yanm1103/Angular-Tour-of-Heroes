import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  HeroesEndpointURL = "http://localhost:3000/heroes";

  constructor(private messageService: MessageService) { }

  async getHeroesCall(): Promise<Hero[]> {
    const heroes = await fetch(this.HeroesEndpointURL);
    return await heroes.json() ?? [];
  }

  async getHeroCall(id: number): Promise<Hero | undefined> {
    const hero = await fetch(`${this.HeroesEndpointURL}/${id}`);
    return await hero.json() ?? {};
  }
}
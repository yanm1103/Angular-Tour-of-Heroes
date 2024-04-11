import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  heroList: Array<Hero>  = [
    {
      id: 1,
      name: 'Invincible',
      power: 'Super strength, flight',
      age: 18,
      birthdate: new Date('2005-04-03'),
      imageURL: 'https://avatarfiles.alphacoders.com/325/325084.jpg'
    },
    {
      id: 2,
      name: 'Storm',
      power: 'Controls weather, flight',
      age: 30,
      birthdate: new Date('1993-09-03'),
      imageURL: 'https://i.pinimg.com/originals/67/13/80/671380cd81e0f17a20d43984543d1631.jpg'
    },
    {
      id: 3,
      name: 'Wolverine',
      power: 'Adamantium skeleton and claws, regenerative healing factor',
      age: 130, // Estimated age, comics don't provide an exact age
      birthdate: new Date('1890-01-01'), // Placeholder, actual birthdate unknown
      imageURL: 'https://avatarfiles.alphacoders.com/296/296038.jpg'
    },
    {
      id: 4,
      name: 'Wonder Woman',
      power: 'Superhuman strength, speed, durability, flight, magical abilities',
      age: 1200, // Estimated age, Amazonians age slowly
      birthdate: new Date('840-01-01'), // Placeholder, actual birthdate unknown
      imageURL: 'https://i.pinimg.com/736x/73/7c/58/737c58eb64bed0b2ce737141ba088be0.jpg'
    }  
  ];

  formatDate(date: Date): string {
    let dateStr = date.toLocaleDateString();
    return dateStr;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatIconModule, MatButton, MatFormFieldModule, MatCardModule, MatDatepickerModule, MatCheckboxModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  heroList: Array<Hero> = [
    {
      id: 0,
      name: 'Invencível',
      power: 'Super força, voar',
      age: 18,
      birthdate: new Date('2005-04-03'),
      imageURL: 'https://avatarfiles.alphacoders.com/325/325084.jpg'
    },
    {
      id: 1,
      name: 'Storm',
      power: 'Controla o tempo, voar',
      age: 30,
      birthdate: new Date('1993-09-03'),
      imageURL: 'https://i.pinimg.com/originals/67/13/80/671380cd81e0f17a20d43984543d1631.jpg'
    },
    {
      id: 2,
      name: 'Wolverine',
      power: 'Esqueleto de Adamantium, fator regenerativo',
      age: 130, // Estimated age, comics don't provide an exact age
      birthdate: new Date('1890-01-01'), // Placeholder, actual birthdate unknown
      imageURL: 'https://avatarfiles.alphacoders.com/296/296038.jpg'
    },
    {
      id: 3,
      name: 'Mulher Maravilha',
      power: 'Super força, habilidades mágicas',
      age: 1200, // Estimated age, Amazonians age slowly
      birthdate: new Date('840-01-01'), // Placeholder, actual birthdate unknown
      imageURL: 'https://i.pinimg.com/736x/73/7c/58/737c58eb64bed0b2ce737141ba088be0.jpg'
    }
  ];

  formatDate(date: Date): string {
    let dateStr = date.toLocaleDateString();
    return dateStr;
  }

  unknownBirthToggle(heroID: number, status: boolean): void {
    this.heroList[heroID].birthdate = undefined;
    console.log("ok")
  }

  editModeArray:Array<boolean> = [];

  toggleEditMode(status: boolean, heroID: number): void {
    this.editModeArray[heroID] = status;
  }
}

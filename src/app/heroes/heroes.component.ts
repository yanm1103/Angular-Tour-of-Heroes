import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatIconModule, MatButton, MatFormFieldModule, MatCardModule, MatDatepickerModule, MatCheckboxModule, MatSelectModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  heroList: Array<Hero> = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

  // Returns the age of the hero in a string already formatted for view
  formatAge(age?: number): string {
    if (age) {
      if (age > 1) return age + ' anos';
      else return age + ' ano';
    } else return 'Idade desconhecida';
  }

  // Returns birthdate for view
  formatDate(date?: Date): string {
    if (date) {
      let dateStr = date.toLocaleDateString();
      return dateStr;
    } else return 'Data de nascimento desconhecida';
  }
}

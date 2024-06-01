import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule, MatCardModule, MatDatepickerModule, MatCheckboxModule, MatButton, MatIconModule, MatFormFieldModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
  @Input() selectedHero?: Hero; // When I have an @Input() like this inside the export class, I can bind a variable in the caller HTML component (in this case it's in heroes.component.html)

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

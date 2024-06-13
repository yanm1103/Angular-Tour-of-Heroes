import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

// My stuff
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSelectModule, MatInputModule, FormsModule, MatCardModule, MatDatepickerModule, MatCheckboxModule, MatButton, MatIconModule, MatFormFieldModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {

  @Input() selectedHero?: Hero; // When I have an @Input() like this inside the export class, I can bind a variable in the caller HTML component (in this case it's in heroes.component.html)

  constructor(
    private heroService: HeroService,
    public messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location,
    private Title: Title
  ) { }

  ngOnInit(): void {
    this.getHero();
    this.Title.setTitle('Tour of Heroes - ' + (this.selectedHero ? this.selectedHero.name : 'carregando...'));
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.selectedHero = hero);
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
    } else return '';
  }
}

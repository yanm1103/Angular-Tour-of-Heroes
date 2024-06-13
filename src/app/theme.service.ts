import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkTheme = false;
  init(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.applyTheme(savedTheme);
    } else {
      // Default to dark theme if no preference is saved
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  }

  applyTheme(theme: string) :void {
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
    const themeToBeRemoved = (theme == 'dark' ? 'light' : 'dark' );
    document.body.classList.remove(themeToBeRemoved);
  }

  switchTheme(): void {
    // Check the current theme
    if (document.body.classList.contains('dark')) {
      this.applyTheme('light');
    } else {
      this.applyTheme('dark');
    }
  }
}

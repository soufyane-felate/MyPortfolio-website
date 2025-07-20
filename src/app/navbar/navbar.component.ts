import { Component, Output, EventEmitter, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatSlideToggleModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  @Output() languageChanged = new EventEmitter<string>();
  @Output() themeToggled = new EventEmitter<void>();

  currentLanguage: string = 'en';
  isDarkMode: boolean = false;
  isWhiteMode: boolean = true;

  navItems = [
    { labelKey: 'HEADER.HOME', link: '/home', type: 'route' },
    { labelKey: 'HEADER.ABOUT_ME', link: '/about', type: 'route' },
    { labelKey: 'HEADER.PROJECTS', link: '/allProject', type: 'route' },
    { labelKey: 'HEADER.CV', type: 'action', action: () => this.downloadCV() },
    { labelKey: 'HEADER.CONTACT', link: '/contact', type: 'route' },
  ];

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.currentLanguage = this.translate.currentLang;
    if (isPlatformBrowser(this.platformId)) {
      const theme = localStorage.getItem('theme');
      this.isDarkMode = theme === 'dark';
      this.isWhiteMode = theme === 'white' || !theme;
    }
  }

  onLanguageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.translate.use(lang);
    this.languageChanged.emit(lang);
  }

  onThemeToggle() {
    this.themeToggled.emit();
  }

  onWhiteMode() {
    this.isDarkMode = false;
    this.isWhiteMode = true;
    document.body.classList.remove('dark-theme');
    document.body.classList.add('white-theme');
    localStorage.setItem('theme', 'white');
    this.themeToggled.emit();
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/assets/CV/CV_FSOUFYANE_O.pdf.pdf';
    link.download = 'soufyane_cv.pdf';
    link.click();
  }

  handleItemClick(item: any, event: Event) {
    if (item.type === 'action' && item.action) {
      event.preventDefault();
      item.action();
    }
  }
}

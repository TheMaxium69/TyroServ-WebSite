import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiFooter, TyroUiNavbar, TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TyroUiNavbar, TyroUiFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly langService = inject(TyroUiLangService);

  public PROJECT_NAME = 'TyroServ';
  public PROJECT_LOGO = 'assets/tyrolium-ui/projects/TyroServ.png';

  public PROJECT_CONTENT = computed(() =>
    this.langService.lang() === 'en'
      ? `<strong>TyroServ</strong> is a <strong>modded Minecraft PVP Faction server</strong> part of the Tyrolium ecosystem. Designed to offer a unique and original experience through the <strong>TyroMod</strong>, our very own mod built exclusively for TyroServ. <em>A Tyrolium subsidiary.</em>`
      : `<strong>TyroServ</strong> est un <strong>serveur Minecraft PVP Faction moddé</strong> au sein de l'écosystème Tyrolium. Conçu pour offrir une expérience originale et unique grâce au <strong>TyroMod</strong>, notre propre mod développé exclusivement pour notre serveur. <em>Une Filiale de Tyrolium.</em>`
  );

  public pages = computed<ITyroUiNavbarPages[]>(() =>
    this.langService.lang() === 'en'
      ? [
          { label: 'Home',     link: '/',          icon: 'ri-home-line' },
          { label: 'About',    ancre: 'about',    icon: 'ri-information-line' },
          { label: 'Season 3', ancre: 'season3',  icon: 'ri-code-s-slash-line' },
          { label: 'History',  ancre: 'history',  icon: 'ri-history-line' },
        ]
      : [
          { label: 'Accueil',  link: '/',          icon: 'ri-home-line' },
          { label: 'À propos', ancre: 'about',    icon: 'ri-information-line' },
          { label: 'Saison 3', ancre: 'season3',  icon: 'ri-code-s-slash-line' },
          { label: 'Historique', ancre: 'history', icon: 'ri-history-line' },
        ]
  );

    public socials: ITyroUiNavbarPages[] = [
        { label: 'instagram', link: 'https://www.instagram.com/tyroliumserver/', icon: 'ri-instagram-line' },
        { label: 'x',         link: 'https://twitter.com/tyrolium',                         icon: 'ri-twitter-x-fill' },
        { label: 'youtube',   link: 'https://www.youtube.com/@TyroServ',               icon: 'ri-youtube-fill' },
        { label: 'discord',   link: 'https://discord.com/invite/km8h5jHezt',           icon: 'ri-discord-fill' },
        { label: 'linkedin',  link: 'https://www.linkedin.com/company/tyroserv',      icon: 'ri-linkedin-fill' },
        { label: 'tiktok',    link: 'https://www.tiktok.com/@tyroserv',                icon: 'ri-tiktok-fill' },
        { label: 'github',    link: 'https://github.com/TyroServ',                     icon: 'ri-github-fill' },
    ];
}

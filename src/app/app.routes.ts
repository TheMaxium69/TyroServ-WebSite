import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { tyroUiErrorRoutes, TyroUiSeo, tyroUiLocalizedRoutes } from 'tyrolium-ui';

/* ─── SEO (titre + description par page, FR / EN) ─────────────────────── */

const SEO_HOME: TyroUiSeo = {
  fullTitle:   { fr: 'TyroServ - Serveur Minecraft PVP Faction Moddé', en: 'TyroServ - Modded PVP Faction Minecraft Server' },
  description: { fr: 'TyroServ est un serveur Minecraft PVP Faction moddé. Découvrez le TyroMod, notre mod exclusif avec la fusion de minerais. Saison 3 en cours de développement. Une filiale de Tyrolium.', en: 'TyroServ is a modded PVP Faction Minecraft server. Discover the TyroMod, our exclusive mod featuring ore fusion. Season 3 in development. A Tyrolium subsidiary.' },
};

export const routes: Routes = tyroUiLocalizedRoutes([
  { path: '',    component: Home, data: { seo: SEO_HOME } },
  ...tyroUiErrorRoutes(),
]);

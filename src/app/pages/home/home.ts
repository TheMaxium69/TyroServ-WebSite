import { Component, inject } from '@angular/core';
import { TyroUiCTA, TyroUiLangService } from 'tyrolium-ui';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  imports: [Header, TyroUiCTA],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly lang = inject(TyroUiLangService).lang;
}

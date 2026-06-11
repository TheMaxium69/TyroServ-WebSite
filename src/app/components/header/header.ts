import { Component, inject } from '@angular/core';
import { TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly lang = inject(TyroUiLangService).lang;
}

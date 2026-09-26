import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@app/shared/services/localStorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  charactersFav$ = this.localStorageSvc.charactersFav$;

  constructor(private localStorageSvc: LocalStorageService) {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit {
  chatacters$ = this.DataService.characters$;

  constructor(private DataService: DataService) {}

  ngOnInit(): void {}
}

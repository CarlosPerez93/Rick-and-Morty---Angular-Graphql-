import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';

import { Character } from '@app/shared/interfaces/data.interface';
import { DataService } from '@app/shared/services/data.service';
import { CharactersListComponent } from './characters-list.component';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;
  const characters: Character[] = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      image: '',
    },
    {
      id: 2,
      name: 'Birdperson',
      status: 'Dead',
      species: 'Alien',
      gender: 'Male',
      image: '',
    },
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [CharactersListComponent],
      providers: [
        {
          provide: DataService,
          useValue: {
            characters$: of(characters),
            loading$: of(false),
            getCharacters: jasmine.createSpy('getCharacters'),
            getCharactersByPage: jasmine.createSpy('getCharactersByPage'),
          },
        },
      ],
    })
      .overrideComponent(CharactersListComponent, { set: { template: '' } })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filters characters by status', () => {
    let filteredCharacters: Character[] = [];
    component.filteredCharacters$.subscribe(
      (results) => (filteredCharacters = results),
    );

    component.setStatusFilter('Alive');

    expect(filteredCharacters.map((character) => character.name)).toEqual([
      'Rick Sanchez',
    ]);
  });

  it('opens the search palette with Ctrl+K', () => {
    const preventDefault = jasmine.createSpy('preventDefault');
    component.onWindowKeydown({
      ctrlKey: true,
      metaKey: false,
      key: 'k',
      preventDefault,
    } as unknown as KeyboardEvent);

    expect(component.isSearchOpen).toBeTrue();
    expect(preventDefault).toHaveBeenCalled();
  });
});

import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared';

@Component({
  selector: 'app-game-card-list',
  templateUrl: './game-card-list.component.html',
  styleUrls: ['./game-card-list.component.scss'],
})
export class GameCardListComponent implements OnInit {
  games: Game[] = [
    {
      imageSrc: 'https://sm.ign.com/t/ign_it/screenshot/default/3915471-drdre_u53f.1280.jpg',
      title: 'GTA Online',
      platformIcons: ['/assets/platformIcons/microsoft.png', '/assets/platformIcons/xbox.jpg'],
      releaseDate: new Date(),
    },
    {
      imageSrc: 'https://sm.ign.com/t/ign_it/screenshot/default/3915471-drdre_u53f.1280.jpg',
      title: 'GTA Online',
      platformIcons: ['/assets/platformIcons/microsoft.png', '/assets/platformIcons/xbox.jpg'],
      releaseDate: new Date(),
    },
    {
      imageSrc: 'https://sm.ign.com/t/ign_it/screenshot/default/3915471-drdre_u53f.1280.jpg',
      title: 'GTA Online',
      platformIcons: ['/assets/platformIcons/microsoft.png', '/assets/platformIcons/xbox.jpg'],
      releaseDate: new Date(),
    },
    {
      imageSrc: 'https://sm.ign.com/t/ign_it/screenshot/default/3915471-drdre_u53f.1280.jpg',
      title: 'GTA Online',
      platformIcons: ['/assets/platformIcons/microsoft.png', '/assets/platformIcons/xbox.jpg'],
      releaseDate: new Date(),
    },
  ];

  ngOnInit(): void {}
}

import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Cassim Ali - Home');
  }
}

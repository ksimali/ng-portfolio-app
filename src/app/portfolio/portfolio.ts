import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Cassim Ali - Portfolio');
  }
}

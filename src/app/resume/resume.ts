import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class Resume {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Cassim Ali - Resume');
  }
}

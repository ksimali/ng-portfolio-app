import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { ProjectService } from '../_services/project.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectService: ProjectService) {
    this.titleService.setTitle('Cassim Ali - Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectById(0);
  }
}

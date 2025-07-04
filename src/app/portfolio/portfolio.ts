import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectService } from '../_services/project.service';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio implements OnInit {

  projects = {} as Project[];

  // a variable to keep track whether or Filter section is collapsed or not
  isCollapsed: boolean = true; // isCollapse is true by default

  //Define a boolean typescript set to false
  typescript: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectService) {
    this.titleService.setTitle('Cassim Ali - Portfolio');
  }
  /** ngOnInit(), a method derives from OnInit interface,
   *  a life cyclehook invoke after the component is initialized
   * to load data for our component  */
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  /** filter()function that will called the getProjectByFilter() function
   *  when we update our filters */
  filter() {
    let filterTags: Tag[] = [];

    if(this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }

    this.projects = this.projectService.getProjectByFilter(filterTags);
  }
}

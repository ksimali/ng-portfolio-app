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

  //Define a typescript boolean  set to false
  typescript: boolean = false;
  angular: boolean = false;
  javascript: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  java: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;
  react: boolean = false;

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
    if(this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if(this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if(this.csharp) {
      filterTags.push(Tag.CSHARP);
    }
    if(this.java) {
      filterTags.push(Tag.JAVA);
    }
    if(this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if(this.aspnet) {
      filterTags.push(Tag.ASPNET);
    }
    if(this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.react) {
      filterTags.push(Tag.REACT);
    }

    this.projects = this.projectService.getProjectByFilter(filterTags);
  }

  /** resetFilter() function */
  resetFilters() {
    this.javascript = false;
    this.typescript = false;
    this.python = false;
    this.java = false;
    this.csharp = false;
    this.angular = false;
    this.aspnet = false;
    this.nodejs = false;
    this.aspnet = false;
    this.react = false;
    
    this.projects = this.projectService.getProjects();
  }
}

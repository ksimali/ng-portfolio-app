import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [
    {id: 0, name: "Employee Manager", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectLink: "//www.github.com", summary: "A Springboot-Angular project that manage employees", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.SPRINGBOOT, Tag.MYSQL, Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP]},
    {id: 1, name: "Pokemon App", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectLink: "//www.github.com", summary: "a Fullstack MEAN Application API that was developed to manage Pokemon Card.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.NODEJS, Tag.JAVASCRIPT, Tag.EXPRESSJS, Tag.ANGULAR]},
    {id: 2, name: "WebPortfolio App", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectLink: "//www.github.com", summary: "This is my WebPortfolio developed using Angular Framework", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP]},
    {id: 3, name: "TodoList App", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using python(flask) and Angular", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT ,Tag.PYTHON]},

  ];
  
  constructor() { }

  //Methods
  /** getProjects() return the entire array of projects */
  getProjects() {
    return this.projects;
  }
  /** getProjectById return a specific project*/
  getProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);
    if(project === undefined) {
      throw new TypeError('pas de projet avec id: '+ id);
    }

    return project;
  }

  /** */
  getProjectByFilter(filterTags: Tag[]) {
    //Define a var, a array of projects
    let filteredProjects: Project[] = [];

    //Loop over our projet to find the one who match our filters
    this.projects.forEach(function (project) {
      let foundAll = true; // declare a boolean equal to true
      //Loop on our filter tags
      filterTags.forEach(function(filterTag) {
        if(project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if(foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}

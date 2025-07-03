import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModal } from '../project-modal/project-modal';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  @Input() project = {} as Project;
  //declare a property named bsModalRef to handle modal dialogs
  bsModalRef?: BsModalRef;

  //constructor
  constructor(private modalService: BsModalService) {

  }

  //Method that will handle opening the modal
  openProjectModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      //take the project input for our project-card component and pass it into the modal 
      initialState: {
        project: this.project
      }
    }
    this.bsModalRef = this.modalService.show(ProjectModal, modalOptions);
  }

}

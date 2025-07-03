import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-modal',
  standalone: false,
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.scss'
})
export class ProjectModal {

  constructor(public bsModalRef: BsModalRef) {

  }
}

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';
import { ProjectCard } from './project-card/project-card';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ProjectModal } from './project-modal/project-modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    App,
    Header,
    Navbar,
    Home,
    Portfolio,
    Resume,
    Contact,
    ProjectCard,
    ProjectModal
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    CarouselModule,
    CollapseModule,
    FormsModule,
    AccordionModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    BsModalService
  ],
  bootstrap: [App]
})
export class AppModule { }

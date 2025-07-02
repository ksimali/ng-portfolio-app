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

@NgModule({
  declarations: [
    App,
    Header,
    Navbar,
    Home,
    Portfolio,
    Resume,
    Contact,
    ProjectCard
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';

const routes: Routes = [
  {path: 'home', component: Home},
  {path: 'portfolio', component: Portfolio},
  {path: 'resume', component: Resume},
  {path: 'contact', component: Contact},
  {path: '**', component: Home, pathMatch: 'full'} // path by default if route unknown
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

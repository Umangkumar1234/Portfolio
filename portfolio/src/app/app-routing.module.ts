import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PosterComponent } from './poster/poster.component';

const routes: Routes = [
  { path: '', component:PosterComponent },
  { path: "edu", component: EducationComponent },
  { path: "about", component:AboutComponent },
  { path:"contact",component:ContactComponent},
  { path:"poster",component:PosterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }

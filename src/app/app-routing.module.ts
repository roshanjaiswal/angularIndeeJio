import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PostRequirementsComponent } from './post-requirements/post-requirements.component';
import { ViewRequirementsComponent } from './view-requirements/view-requirements.component';
import { ShowYourBusinessComponent } from './show-your-business/show-your-business.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'post-requirements', component: PostRequirementsComponent },
  { path: 'view-requirements', component: ViewRequirementsComponent },
  { path: 'show-your-business', component: ShowYourBusinessComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

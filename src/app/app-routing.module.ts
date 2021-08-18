import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  // { path: 'pet/:id', component: PetDetailsComponent, canActivate: [AuthGuard], resolve: { pet: PetResolverService } },
  // { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  // {
  //   path: '', component: PetAppComponent, // pathMatch:'full' like exact in react, here we dont need it
  //   children: [
  //     { path: 'edit/:id', component: PetEditComponent, resolve: { pet: PetResolverService } },
  //     { path: 'edit', component: PetEditComponent },
  //   ]
  // },
  { path: '', component: HomeComponent },
  {
    path: 'contact', component: ContactPageComponent,
    children: [
      { path: 'edit/:id', component: ContactEditComponent,pathMatch:'full', resolve: { contact: ContactResolverService } },
      { path: 'edit', component: ContactEditComponent, pathMatch:'full' },
      { path: ':id', component: ContactDetailsComponent, resolve: { contact: ContactResolverService } },
    ]
  },
  // { path: 'contact/:id', component: ContactDetailsComponent, resolve: { contact: ContactResolverService } },
  { path: 'signup', component: SignupPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

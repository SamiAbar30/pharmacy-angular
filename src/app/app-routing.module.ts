import { DhuserComponent } from './dashboard/dhuser/dhuser.component';
import { DhpharmacieComponent } from './dashboard/dhpharmacie/dhpharmacie.component';
import { DhzoneComponent } from './dashboard/dhzone/dhzone.component';
import { DhvillesComponent } from './dashboard/dhvilles/dhvilles.component';

import { DhregionComponent } from './dashboard/dhregion/dhregion.component';
import { DHpayesComponent } from './dashboard/dhpayes/dhpayes.component';

import { RegionComponent } from './application/main/region/region.component';
import { SingComponent } from './sing/sing.component';
import { LoginComponent } from './login/login.component';
import { VillesComponent } from './application/main/villes/villes.component';
import { ApplicationComponent } from './application/application.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './application/main/main.component';
import { PharmacieComponent } from './application/main/pharmacie/pharmacie.component';
import { DetailpharmacieComponent } from './application/main/detailpharmacie/detailpharmacie.component';
import { ProfileComponent } from './application/main/profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DHpayesComponent },
      { path: 'payes', component: DHpayesComponent },
      { path: 'region', component: DhregionComponent },
      { path: 'ville', component: DhvillesComponent },
      { path: 'zone', component: DhzoneComponent },
      { path: 'pharmacie', component: DhpharmacieComponent },
      { path: 'users', component: DhuserComponent },
    ],
  },
  { path: 'Landing', component: LandingComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'sing', component: SingComponent },
  {
    path: 'Application',
    component: ApplicationComponent,
    children: [
      {
        path: 'Main',
        component: MainComponent,
        children: [
          { path: 'Region', component: RegionComponent },
          { path: 'Villes/:id', component: VillesComponent },
          { path: 'pharmacie/:id', component: PharmacieComponent },
          { path: 'detailpharmacie/:id', component: DetailpharmacieComponent },
          { path: 'profile', component: ProfileComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

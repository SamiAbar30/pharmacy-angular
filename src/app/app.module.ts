import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import { PrimengModule } from './primeng/primeng.module';
import { LandingComponent } from './landing/landing.component';
import { ApplicationComponent } from './application/application.component';
import { RegionComponent } from './application/main/region/region.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './application/main/main.component';
import { VillesComponent } from './application/main/villes/villes.component';
import { ZoneComponent } from './application/main/villes/zone/zone.component';
import { SingComponent } from './sing/sing.component';
import { PharmacieComponent } from './application/main/pharmacie/pharmacie.component';
import { ListpharmacieComponent } from './application/main/pharmacie/listpharmacie/listpharmacie.component';
import { DetailpharmacieComponent } from './application/main/detailpharmacie/detailpharmacie.component';
import { MapsComponent } from './application/main/maps/maps.component';
import { NavigationloginComponent } from './navigationlogin/navigationlogin.component';
import { NavigationUserComponent } from './navigation-user/navigation-user.component';
import { ProfileComponent } from './application/main/profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DHpayesComponent } from './dashboard/dhpayes/dhpayes.component';
import { DhregionComponent } from './dashboard/dhregion/dhregion.component';
import { DhvillesComponent } from './dashboard/dhvilles/dhvilles.component';
import { DhzoneComponent } from './dashboard/dhzone/dhzone.component';
import { DhpharmacieComponent } from './dashboard/dhpharmacie/dhpharmacie.component';
import { DhuserComponent } from './dashboard/dhuser/dhuser.component';
import { CUpayesComponent } from './dashboard/dhpayes/cupayes/cupayes.component';
import { CUregionComponent } from './dashboard/dhregion/curegion/curegion.component';
import { CUuserComponent } from './dashboard/dhuser/cuuser/cuuser.component';
import { CUvilleComponent } from './dashboard/dhvilles/cuville/cuville.component';
import { CUzoneComponent } from './dashboard/dhzone/cuzone/cuzone.component';
import { CUpharmacieComponent } from './dashboard/dhpharmacie/cupharmacie/cupharmacie.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ApplicationComponent,
    RegionComponent,
    LoginComponent,
    MainComponent,
    VillesComponent,
    ZoneComponent,
    SingComponent,
    PharmacieComponent,
    ListpharmacieComponent,
    DetailpharmacieComponent,
    MapsComponent,
    NavigationloginComponent,
    NavigationUserComponent,
    ProfileComponent,
    DashboardComponent,
    DHpayesComponent,
    DhregionComponent,
    DhvillesComponent,
    DhzoneComponent,
    DhpharmacieComponent,
    DhuserComponent,
    CUpayesComponent,
    CUregionComponent,
    CUuserComponent,
    CUvilleComponent,
    CUzoneComponent,
    CUpharmacieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

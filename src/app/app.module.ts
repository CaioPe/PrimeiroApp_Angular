import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileListComponent } from './profiles/profile-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error404/error-404.component';
import { ProfileInfoComponent } from './profiles/profile-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    NavBarComponent,
    Error404Component,
    ProfileInfoComponent
    //RouterModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'profiles', component: ProfileListComponent
      },
      {
        path: 'profiles/info/:id', component: ProfileInfoComponent
      },
      {
        path:'', redirectTo: 'profiles', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

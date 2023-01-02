import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactformComponent } from './contactform/contactform.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule as MatButtonModule } from '@angular/material/button';
import { MatDialogModule as MatDialogModule } from '@angular/material/dialog';
import { DeveloperComponent } from './developer/developer.component';
import { DevelopersListComponent } from './developers-list/developers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ContactformComponent,
    TasksListComponent,
    FooterComponent,
    DeveloperComponent,
    DevelopersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

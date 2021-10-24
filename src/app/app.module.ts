import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    UserCreateComponent,
    UserListComponent,
    UserEditComponent,
    CardComponent,
    TopbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
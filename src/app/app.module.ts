import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';
import { UserUpdateComponent } from './User/user-update/user-update.component';



const appRoutes: Routes=[
  {path:'userList', component: UserListComponent},
  { path:'addUser', component: UserRegisterComponent },
  {path:'updateUser/:id/edit',component: UserUpdateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserRegisterComponent,
    UserUpdateComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

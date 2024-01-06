import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
    {path:"",component:DashboardComponent},
    {path:"login",component:LoginComponent},
    {path:"registrarse",component:RegistrarseComponent},
    {path:"dashboard", component:DashboardComponent},
    {path:"menu", component:MenuComponent}
];

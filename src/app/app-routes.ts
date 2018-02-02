import { Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/feature/authentification/authentification.module#AuthentificationModule'
    },
    {
        path: 'personnage',
        loadChildren: 'app/feature/personnage/personnage.module#PersonnageModule'
    },
    {
        path: '',
        redirectTo: '/personnage',
        pathMatch: 'full'
    },
];

import { Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/feature/authentification/authentification.module#AuthentificationModule'
    },
    {
        path: 'personnage',
        loadChildren: 'app/feature/personnage/shared/personnage-shared.module#PersonnageSharedModule'
    },
    {
        path: 'portail',
        loadChildren: 'app/feature/portail/portail.module#PortailModule'
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

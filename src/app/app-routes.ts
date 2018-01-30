import { Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    { path: 'personnage', loadChildren: 'app/feature/personnage/personnage.module#PersonnageModule' },
];

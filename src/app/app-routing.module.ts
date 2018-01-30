import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { routes } from './app-routes';

@NgModule({
    imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

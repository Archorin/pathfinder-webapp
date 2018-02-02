import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './authentification/auth.service';
import { AuthInterceptor } from './authentification/auth-interceptor';
import { LoginComponent } from './authentification/login/login.component';
import { FormsModule } from '@angular/forms';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [
    AuthService
  ],
  exports: [LoginComponent]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: CoreModule, providers: [ComponentLoaderFactory, PositioningService]};
  }
}

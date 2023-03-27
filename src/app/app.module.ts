import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Personalize Module
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar local de la app
import localEs from "@angular/common/locales/es-MX";
import localFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData( localEs );
registerLocaleData( localFr ); 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule,

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX'   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

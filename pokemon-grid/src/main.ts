import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


bootstrapApplication(AppComponent, {
  providers: [HttpClientModule,
    importProvidersFrom(RouterModule.forRoot([
    ])), provideAnimationsAsync(),
  ]
}).catch(err => console.error(err));
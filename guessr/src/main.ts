import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { IndexComponent } from './app/components/index/index.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter([
      { path: 'index', component: IndexComponent },
      
      {
        path: 'game-movie',
        loadChildren: () => import('./app/components/game/movie/game-movie.routes')
          .then(r => r.GAMEMOVIE_ROUTES)
      },
      /*
      {
        path: 'game-movie',
        loadComponent: () => import('./app/components/game/movie/game-movie.component')
          .then(c => c.GameMovieComponent)
      },
      */
      /*{ path: 'game-movie', component: GameMovieComponent },*/
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: '**', redirectTo: 'index', pathMatch: 'full' },
    ]),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
  .catch((err) => console.error(err));
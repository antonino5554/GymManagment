import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full' 
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'clienti-homepage',
    loadChildren: () => import('./clienti-homepage/clienti-homepage.module').then( m => m.ClientiHomepagePageModule)
  },
  {
    path: 'visualizza-pt',
    loadChildren: () => import('./visualizza-pt/visualizza-pt.module').then( m => m.VisualizzaPtPageModule)
  },
  {
    path: 'valuta-pt',
    loadChildren: () => import('./valuta-pt/valuta-pt.module').then( m => m.ValutaPtPageModule)
  },
  {
    path: 'pt-homepage',
    loadChildren: () => import('./pt-homepage/pt-homepage.module').then( m => m.PtHomepagePageModule)
  },
  {
    path: 'crea-allenamento',
    loadChildren: () => import('./crea-allenamento/crea-allenamento.module').then( m => m.CreaAllenamentoPageModule)
  },
  {
    path: 'prenota-allenamento',
    loadChildren: () => import('./prenota-allenamento/prenota-allenamento.module').then( m => m.PrenotaAllenamentoPageModule)
  },
  {
    path: 'admin-homepage',
    loadChildren: () => import('./admin-homepage/admin-homepage.module').then( m => m.AdminHomepagePageModule)
  },  {
    path: 'visualizza-prenotazioni',
    loadChildren: () => import('./visualizza-prenotazioni/visualizza-prenotazioni.module').then( m => m.VisualizzaPrenotazioniPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

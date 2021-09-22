import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menuitems', loadChildren: './menuitems/menuitems.module#MenuitemsPageModule' },
  { path: 'bolscan', loadChildren: './bolscan/bolscan.module#BolscanPageModule' },
  { path: 'bolscanning', loadChildren: './bolscanning/bolscanning.module#BolscanningPageModule' },
  { path: 'tracking', loadChildren: './tracking/tracking.module#TrackingPageModule' },
  { path: 'reportsip', loadChildren: './reportsip/reportsip.module#ReportsipPageModule' },
  { path: 'scanreturns', loadChildren: './scanreturns/scanreturns.module#ScanreturnsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetrieveallComponent } from './retrieveall/retrieveall.component';
import { NewrestaurantComponent } from "./newrestaurant/newrestaurant.component";

// import { BetaComponent } from './beta/beta.component';
// import { GammaComponent } from './gamma/gamma.component';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'restaurants',component: RetrieveallComponent },
  { path: 'restaurants/new',component: NewrestaurantComponent },
  // { path: 'beta',component: BetaComponent },

  // // use a colon and parameter name to include a parameter in the url
  // { path: 'gamma/:id', component: GammaComponent },

  // // redirect to /alpha if there is nothing in the url
  // { path: '', pathMatch: 'full', redirectTo: '/alpha' },

  // // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




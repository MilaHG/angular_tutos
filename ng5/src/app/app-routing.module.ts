import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // importe le component pour le routing
import { AboutComponent } from './about/about.component'; // importe le component pour le routing

// c'est dans cette constante que l'on indique les chemins (paths) des routes de nos components
const routes: Routes = [
  {
    path: '', // pas de valeur ici c'est la page d'accueil
    component: HomeComponent
  },
  {
    path: 'about/:id', // ici :id est un paramètre de route
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

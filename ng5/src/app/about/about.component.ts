import { Component, OnInit } from '@angular/core';
// donner accès aux paramètres des routes on importe cet élément de la bibliothèque Angular
import { ActivatedRoute, Router } from '@angular/router';
// component based router navigation
import { DataService } from './../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;

  /* dans le constructeur on créé une instance de ActivatedRoute et pour ce faire on
   * fait une injection de dépendance pour utiliser les routes dans le constructeur
   */
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id));
    /* on affiche simplement pour le moment la réponse res dans la console et on veut en réponse l'id
    * que l'on a défini dans app-routing.module
    * on fait pareil quand on veut récupérer des infos d'une BDD en utilisant une API
    */
   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}

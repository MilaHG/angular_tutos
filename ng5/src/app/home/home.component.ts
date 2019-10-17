import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', // le fichier html relié à ce component
  styleUrls: ['./home.component.scss'], // le fichier CSS relié à ce component
  animations: [
    trigger('goals', [
      // le trigger est un peu l'écouteur d'events de JS
      transition('* => *', [
        // état de départ et état d'arrivé après l'animation la notation avec * => * rend celle-ci dynamique
        query(':enter', style({ opacity: 0 }), { optional: true }), // sans optional:true l'animation peut ne pas se lancer

        query(
          ':enter', // quand un élément se rajoute au DOM
          stagger('300ms', [
            animate(
              '.6s ease-in',
              keyframes([
                style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
              ])
            )
          ]),
          { optional: true }
        ),

        query(
          ':leave', // quand un élément est supprimé du DOM
          stagger('300ms', [
            animate(
              '.6s ease-in',
              keyframes([
                style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
                style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 })
              ])
            )
          ]),
          { optional: true }
        ),
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  itemCount: number;
  btnText: string = 'Ajouter un souhait';
  goalText: string = 'Mon premier souhait';
  goals = [];

  constructor(private _data: DataService) {}

  // Life cycle hook that initiates at the loading of the app or the component itself
  ngOnInit() {
    // on souscrit au service Data pour récupérer les données stockées dans le tableau goals de la class DataService
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText); // on ajoute ce que l'utilisateur envoie dans le formulaire
    this.goalText = ''; // on vide le champs du formulaire pour éviter de renvoyer la même chose plusieurs fois
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length;
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }
}

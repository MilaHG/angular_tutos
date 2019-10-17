import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
/*
* Un fichier de service permet d'utiliser les mêmes données, le
* même code depuis plusieurs components sans le réécrire dans chaque
* et de faire des requêtes HTTP
*
* ici on va partager notre array GOALS aux components home & about
* la bibliothèque RXJS behaviour sert à cela
*/

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>(['Premier souhait', 'Un autre silly goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

}

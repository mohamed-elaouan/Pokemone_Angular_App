import { Component } from "@angular/core";
import { Voiture } from "../VoitureData/VoitureStructure";
import { Voitures } from "../VoitureData/VoitureInsertion";
import {  Router } from "@angular/router";

@Component({
  selector: "app-list-voiture",
  templateUrl:"./list-voiture.component.html",
  styles: ``,
})
export class ListVoitureComponent {
  constructor(private router:Router){}
  VoituresAll: Voiture[] = Voitures;
  gotoDetail(id:number){
    //Methode 
    //window.location.href=`/Voiture/${id}`
    //Méthode Proffsiole
    //this.router.navigate([`/Voiture/${id}`]);
    this.router.navigate([`/Voiture`,id]);
  }
}

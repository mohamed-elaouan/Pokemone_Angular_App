import { Component, OnInit } from "@angular/core";
import { Voiture } from "../VoitureData/VoitureStructure";
import {  Router } from "@angular/router";
import { VoitureService } from "../voiture.service";

@Component({
  selector: "app-list-voiture",
  templateUrl:"./list-voiture.component.html",
  styles: ``,
})
export class ListVoitureComponent implements OnInit{
  constructor(private router:Router,private ServicesCar:VoitureService){}
  VoituresAll: Voiture[];
  ngOnInit() {
     this.VoituresAll=this.ServicesCar.getVoitureList();
  }
  gotoDetail(id:number){
    //Methode 
    //window.location.href=`/Voiture/${id}`
    //Méthode Proffsiole
    //this.router.navigate([`/Voiture/${id}`]);
    this.router.navigate([`/Voiture`,id]);
  }

}

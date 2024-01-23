import { Component, OnInit } from "@angular/core";
import { Voitures } from "./VoitureData/VoitureInsertion";
import { Voiture } from "./VoitureData/VoitureStructure";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.table(Voitures[1]);
  }
  VoituresAll = Voitures;
  VoitureSelected: Voiture = Voitures[2];
  getVoiture(idVoiture: string) {
    const id: number = +idVoiture;
    const Find_Voiture: Voiture | undefined = Voitures.find(
      (Car) => Car.Id == +idVoiture
    );
    if (Find_Voiture) {
      console.log("cette Voiture existe :" + Find_Voiture.Marque);
      this.VoitureSelected = Find_Voiture;
    } else {
      console.log("cette Voiture n'existe pas");
      //this.VoitureSelected = Find_Voiture;
    }
    // console.log(
    //   this.VoituresAll.find((Car) => {
    //     Car.Id == +idVoiture;
    //   })
    // );
    // Voitures.map((item) => {
    //   if (item.Id == id) {
    //     this.VoitureSelected = item;
    //     return console.log(item.Marque);
    //   }
    //   return 1;
    // });
  }
}

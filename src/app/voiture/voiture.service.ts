import { Injectable } from "@angular/core";
import { Voiture } from "./VoitureData/VoitureStructure";
import { Voitures } from "./VoitureData/VoitureInsertion";

@Injectable()
//{
//cette ligne pour les dire que cette service peut utilisé par toutes project
//providedIn: "root",
//}
export class VoitureService {
  constructor() {} //Pas obligatoire de garde ça
  getVoitureList(): Voiture[] {
    return Voitures;
  }
  getVoitureById(id: string): Voiture | undefined {
    return Voitures.find((voiture) => voiture.Id == +id);
  }
  getCategorieList(): string[] {
    return ["Transport", "Marchandise", "Sport", "Family", "Classic"];
  }
}

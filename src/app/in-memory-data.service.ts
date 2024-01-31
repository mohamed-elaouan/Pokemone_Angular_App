
import { Injectable } from "@angular/core";
import { Voitures } from "./voiture/VoitureData/VoitureInsertion";
//pour Api 3️⃣
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  //pour api 4️⃣
  createDb() {
    return { Voitures };
  }
  constructor() {}
}

import { Injectable } from "@angular/core";
import { Voiture } from "./VoitureData/VoitureStructure";
import { Voitures } from "./VoitureData/VoitureInsertion";
import { Observable, catchError, of, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
//{
//cette ligne pour les dire que cette service peut utilisé par toutes project
//providedIn: "root",
//}
export class VoitureService {
  constructor(private http: HttpClient) {} //Pas obligatoire de garde ça
  //methode 1
  // getVoitureList(): Voiture[] {
  //   return Voitures;
  // }
  //methode 2
  getVoitureList(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>("api/Voitures").pipe(
      tap((Voitures) => Voitures),
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
  getVoitureById(id: string): Observable<Voiture | undefined> {
    //1ere methode
    //return Voitures.find((voiture) => voiture.Id == +id);
    return this.http.get<Voiture>(`api/Voiture/${id}`).pipe(
      tap((res) => console.table(res)),
      catchError((err) => {
        console.log(err);
        return of(undefined);
      })
    );
  }
  getCategorieList(): string[] {
    return ["Transport", "Marchandise", "Sport", "Family", "Classic"];
  }
}
